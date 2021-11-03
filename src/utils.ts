import { blake2bHex } from "blakejs";
import * as elliptic from "elliptic";
import keccak256 from "keccak256";

import { DeployData, SigAlgorithm } from "./models";
import * as rnodeProtos from "./rnode-protos";
import * as base58 from "./base58";
import { getDeployData } from "./utils/getDeployData";
import { getDeployDataToSign } from "./utils/getDeployDataToSign";
import { getBlake2Hash } from "./utils/getBlake2Hash";

export * from "./utils/rhoValToJs";
export * from "./utils/rhoExprToVar";
export * from "./utils/decodePar";

export const getFirstBlock = (
  blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]
): any => {
  return blockInfo[0];
};

export const getValueFromBlocks = (
  blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]
): rnodeProtos.IPar => {
  for (let i = 0; i < blockInfo.length; i += 1) {
    const block = blockInfo[i];
    if (block.postBlockData) {
      for (let j = 0; j < block.postBlockData.length; j += 1) {
        const data = block.postBlockData[j];
        if (data) {
          return data;
        }
      }
    }
  }
  throw new Error("Not data found in any block");
};

export const unforgeableWithId = (id: Buffer): string => {
  return id.toString("hex");
};

const stringToRhoRepr = (a: string): rnodeProtos.IExpr => {
  return { g_string: a };
};
const intToRhoRepr = (a: number): rnodeProtos.IExpr => {
  return { g_int: a };
};
const boolToRhoRepr = (a: boolean): rnodeProtos.IExpr => {
  return { g_bool: a };
};
const listToRhoRepr = (a: any[]): rnodeProtos.EList => {
  return {
    ps: a.map((e) => ({ exprs: [varToRhoExpr(e)] })),
  } as rnodeProtos.EList;
};

export const mapToRhoRepr = (a: any): rnodeProtos.EMap => {
  const map: any = {
    kvs: [],
  };

  Object.keys(a)
    .sort() // alphabetical
    .forEach((key) => {
      if (typeof a[key] !== "undefined" && a[key] !== null) {
        map.kvs.push({
          key: { exprs: [varToRhoExpr(key)] },
          value: { exprs: [varToRhoExpr(a[key])] },
        });
      } else {
        map.kvs.push({
          key: { exprs: [varToRhoExpr(key)] },
        });
      }
    });

  return map as rnodeProtos.EMap;
};

export const varToRhoExpr = (a: any): rnodeProtos.IExpr => {
  if (typeof a === "boolean") {
    return boolToRhoRepr(a as boolean);
  }
  if (typeof a === "string") {
    return stringToRhoRepr(a as string);
  }
  if (typeof a === "number") {
    return intToRhoRepr(a as number);
  }
  if (Array.isArray(a)) {
    return { e_list_body: listToRhoRepr(a) };
  }
  if (typeof a === "object" && a !== null) {
    return { e_map_body: mapToRhoRepr(a) };
  }

  throw new Error("Unknown variable type");
};

export const toByteArray = (a: any) => {
  const expr = varToRhoExpr(a);
  return rnodeProtos.Par.encode({
    exprs: [expr],
  }).finish();
};

export const verifyPrivateAndPublicKey = (
  privateKey: string,
  publicKey: string
) => {
  const ec = new elliptic.ec("secp256k1");
  const keyPair = ec.keyFromPrivate(privateKey);
  if (keyPair.getPublic().encode("hex", false) !== publicKey) {
    throw new Error("Private key and public key do not match");
  }
};

export const signSecp256k1 = (
  hash: Uint8Array,
  privateKey: string
): Uint8Array => {
  const ec = new elliptic.ec("secp256k1");
  const keyPair = ec.keyFromPrivate(privateKey);

  const signature = keyPair.sign((Buffer || Buffer).from(hash), {
    canonical: true,
  });
  const derSign = signature.toDER();

  if (!ec.verify(Buffer.from(hash), signature, keyPair, "hex")) {
    throw new Error("Failed to verify signature");
  }

  return new Uint8Array(derSign);
};

export const transferRevTerm = (a: {
  from: string;
  to: string;
  amount: number;
}) => {
  if (typeof a.from !== "string") {
    throw new Error("from must be a REV address");
  }
  if (typeof a.to !== "string") {
    throw new Error("to must be a REV address");
  }
  if (typeof a.amount !== "number") {
    throw new Error("amount must be a number");
  }

  return `new
  rl(\`rho:registry:lookup\`),
  RevVaultCh,
  stdout(\`rho:io:stdout\`)
in {

rl!(\`rho:rchain:revVault\`, *RevVaultCh) |
for (@(_, RevVault) <- RevVaultCh) {

  match (
    "${a.from}",
    "${a.to}",
    ${a.amount}
  ) {
    (from, to, amount) => {

      new vaultCh, revVaultkeyCh, deployerId(\`rho:rchain:deployerId\`) in {
        @RevVault!("findOrCreate", from, *vaultCh) |
        @RevVault!("deployerAuthKey", *deployerId, *revVaultkeyCh) |
        for (@(true, vault) <- vaultCh; key <- revVaultkeyCh) {

          stdout!(("Beginning transfer of ", amount, "REV from", from, "to", to)) |

          new resultCh in {
            @vault!("transfer", to, amount, *key, *resultCh) |
            for (@result <- resultCh) {
              stdout!(("Finished transfer of ", amount, "REV to", to, "result was:", result))
            }
          }
        }
      }
    }
  }
}
}`;
};

export const getDeployOptions = (
  sigAlgorithm: SigAlgorithm,
  timestamp: number,
  term: string,
  privateKey: string,
  publicKey: string,
  phloPrice = 1,
  phloLimit = 10000,
  validAfterBlockNumber = 0
): {
  data: DeployData;
  deployer: string;
  signature: string;
  sigAlgorithm: SigAlgorithm;
} => {
  const deployData = getDeployData(
    timestamp,
    term,
    phloPrice,
    phloLimit,
    validAfterBlockNumber
  );

  const toSign = getDeployDataToSign(deployData);

  const hash = getBlake2Hash(toSign);

  let signature: Uint8Array;
  signature = signSecp256k1(hash, privateKey);

  return {
    data: deployData,
    deployer: publicKey,
    signature: Buffer.from(new Uint8Array(signature)).toString("hex"),
    sigAlgorithm: sigAlgorithm,
  };
};

// Address and public key

// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47

// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
const prefix = { coinId: "000000", version: "00" };

const toBase58 = (hexStr: string) => {
  const bytes = bytesFromHex(hexStr);
  return base58.encode(bytes);
};

const getAddrFromEth = (ethAddr: string): string => {
  if (!ethAddr || ethAddr.length !== 40) {
    throw new Error("ETH address must contain 130 characters");
  }

  // Hash ETH address
  const ethAddrBytes = bytesFromHex(ethAddr);
  const ethHash = keccak256(Buffer.from(ethAddrBytes)).toString("hex");

  // Add prefix with hash and calculate checksum (blake2b-256 hash)
  const payload = `${prefix.coinId}${prefix.version}${ethHash}`;
  const payloadBytes = bytesFromHex(payload);
  const checksum = blake2bHex(payloadBytes, void 666, 32).slice(0, 8);

  // Return REV address
  return toBase58(`${payload}${checksum}`);
};

const bytesFromHex = (hexStr: string) => {
  const byte2hex = ([arr, bhi]: [any[], number], x: any) =>
    bhi ? [[...arr, parseInt(`${bhi}${x}`, 16)]] : [arr, x];
  const [resArr] = Array.from(hexStr).reduce(byte2hex, [[]]);
  return Uint8Array.from(resArr);
};

export const revAddressFromPublicKey = (publicKey: string) => {
  if (!publicKey || publicKey.length !== 130) {
    throw new Error("Public key must contain 130 characters");
  }

  // Public key bytes from hex string
  const pubKeyBytes = bytesFromHex(publicKey);

  // Remove one byte from pk bytes and hash
  const pkHash = keccak256(Buffer.from(pubKeyBytes.slice(1))).toString("hex");

  // Take last 40 chars from hashed pk (ETH address)
  const pkHash40 = pkHash.slice(-40);

  // Return both REV and ETH address
  return getAddrFromEth(pkHash40);
};

export const publicKeyFromPrivateKey = (privateKey: string) => {
  const ec = new elliptic.ec("secp256k1");
  const keyPair = ec.keyFromPrivate(privateKey);
  return keyPair.getPublic().encode("hex", false);
};
