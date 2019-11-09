import { blake2bInit, blake2bUpdate, blake2bFinal, blake2bHex } from "blakejs";
import * as elliptic from "elliptic";
import { keccak256 } from "js-sha3";
import { Writer } from "protobufjs";

import { Payment, DeployData, SigAlgorithm } from "./models";
import * as rnodeProtos from "./rnode-protos";
import * as base58 from "./base58";

const ec = new elliptic.ec("secp256k1");

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

const rhoUnforgeablesToJs = (unfs: any) => {
  const unforgeables: {
    gPrivate?: string;
    gDeployId?: string;
    gDeployerId?: string;
  }[] = [];

  unfs.forEach((u: any) => {
    const x: { [key: string]: string } = {};
    if (u.g_private_body) {
      x.gPrivate = Buffer.from(u.g_private_body.id).toString("hex");
    } else if (u.g_deploy_id_body) {
      x.gDeployId = Buffer.from(u.g_deploy_id_body.id).toString("hex");
    } else if (u.g_deployer_id_body) {
      x.gDeployerId = Buffer.from(u.g_deployer_id_body.id).toString("hex");
    }

    unforgeables.push(x);
  });

  return unforgeables;
};

const rholangMapToJsObject = (expr: any) => {
  const obj: { [key: string]: any } = {};
  expr.e_map_body.kvs.forEach((kv: any) => {
    const k = kv.key.exprs[0].g_string;
    obj[k] = rhoValToJs(kv.value);
  });

  return obj;
};

const rhoIdsToJs = (ids: any) => {
  return ids[0].id;
};
const rhoExprStringToJs = (expr: any) => {
  return expr.g_string;
};
const rhoExprUriToJs = (expr: any) => {
  return expr.g_uri;
};
const rhoExprBoolToJs = (expr: any) => {
  return expr.g_bool;
};
const rhoExprIntToJs = (expr: any) => {
  return expr.g_int;
};
const rhoExprListToJs = (expr: any) => {
  return expr.e_list_body.ps.map((e: any) => rhoValToJs(e));
};

export const rhoValToJs = (val: any) => {
  if (val.ids && val.ids[0]) {
    return rhoIdsToJs(val.ids);
  } else if (val.unforgeables && val.unforgeables[0]) {
    return rhoUnforgeablesToJs(val.unforgeables);
  } else if (val.exprs[0] && val.exprs[0].e_map_body) {
    return rholangMapToJsObject(val.exprs[0]);
  } else if (val.exprs[0] && val.exprs[0].g_string) {
    return rhoExprStringToJs(val.exprs[0]);
  } else if (val.exprs[0] && val.exprs[0].g_uri) {
    return rhoExprUriToJs(val.exprs[0]);
  } else if (val.exprs[0] && val.exprs[0].hasOwnProperty("g_bool")) {
    return rhoExprBoolToJs(val.exprs[0]);
  } else if (val.exprs[0] && val.exprs[0].g_int) {
    return rhoExprIntToJs(val.exprs[0]);
  } else if (val.exprs[0] && val.exprs[0].e_list_body) {
    return rhoExprListToJs(val.exprs[0]);
  } else {
    console.warn("Not implemented", val);
    return null;
  }
};

export const unforgeableWithId = (id: Buffer): string => {
  const bytes = Writer.create()
    .bytes(id)
    .finish()
    .slice(1);

  return Buffer.from(bytes).toString("hex");
};

export const getPayment = (
  timestamp: number,
  term: string,
  phloPrice = 1,
  phloLimit = 10000000,
  validAfterBlockNumber = -1
): Payment => {
  return {
    timestamp: timestamp,
    term: term,
    phloLimit: phloLimit,
    phloPrice: phloPrice,
    validAfterBlockNumber: validAfterBlockNumber
  };
};

export const getDeployDataToSign = (payment: Payment): Uint8Array => {
  return rnodeProtos.casper.DeployDataProto.encode(payment).finish();
};

export const getBlake2Hash = (toHash: Uint8Array): Uint8Array => {
  const context = blake2bInit(32, null);
  blake2bUpdate(context, toHash);
  return blake2bFinal(context);
};

export const verifyPrivateAndPublicKey = (
  privateKey: string,
  publicKey: string
) => {
  const keyPair = ec.keyFromPrivate(privateKey);
  if (keyPair.getPublic().encode("hex", false) !== publicKey) {
    throw new Error("Private key and public key do not match");
  }
};

export const signSecp256k1 = (
  hash: Uint8Array,
  privateKey: string
): Uint8Array => {
  const keyPair = ec.keyFromPrivate(privateKey);

  const signature = keyPair.sign(Buffer.from(hash), { canonical: true });
  const derSign = signature.toDER();

  if (!ec.verify(Buffer.from(hash), signature, keyPair, "hex")) {
    throw new Error("Signature verification failed");
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

export const getDeployData = (
  sigAlgorithm: SigAlgorithm,
  timestamp: number,
  term: string,
  privateKey: string,
  publicKey: string,
  phloPrice = 1,
  phloLimit = 10000,
  validAfterBlockNumber = -1
): DeployData => {
  const payment = getPayment(
    timestamp,
    term,
    phloPrice,
    phloLimit,
    validAfterBlockNumber
  );

  const toSign = getDeployDataToSign(payment);

  const hash = getBlake2Hash(toSign);

  let signature: Uint8Array;
  if (sigAlgorithm === "ed25519") {
    throw new Error("Unsupported algorithm ed25519; please use secp256k1");
  } else if (sigAlgorithm === "secp256k1") {
    signature = signSecp256k1(hash, privateKey);
  } else {
    throw new Error("Unsupported algorithm");
  }

  return {
    ...payment,
    deployer: Buffer.from(publicKey, "hex"),
    sig: signature,
    sigAlgorithm: sigAlgorithm
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
  const ethHash = keccak256(ethAddrBytes);

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
  const pkHash = keccak256(pubKeyBytes.slice(1));

  // Take last 40 chars from hashed pk (ETH address)
  const pkHash40 = pkHash.slice(-40);

  // Return both REV and ETH address
  return getAddrFromEth(pkHash40);
};
