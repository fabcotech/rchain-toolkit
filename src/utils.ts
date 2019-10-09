import { blake2bInit, blake2bUpdate, blake2bFinal } from "blakejs";
import * as elliptic from "elliptic";
import { Writer } from "protobufjs";

import {
  Payment,
  DeployData,
  SigAlgorithm,
  DataWithBlockInfo,
  Par
} from "./models";
import * as rnodeProtos from "./rnode-protos";

const ec = new elliptic.ec("secp256k1");

export const getValueFromBlocks = (
  blockResults: rnodeProtos.casper.IDataWithBlockInfo[]
): rnodeProtos.IPar => {
  for (let i = 0; i < blockResults.length; i += 1) {
    const block = blockResults[i];
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

const rholangUnforgeablesToJs = (unfs: any) => {
  const unforgeables: {
    gPrivate?: string;
    gDeployId?: string;
    gDeployerId?: string;
  }[] = [];

  unfs.forEach((u: any) => {
    const x: { [key: string]: string } = {};
    const encoded = rnodeProtos.GUnforgeable.encode(u).finish();
    const decoded = rnodeProtos.GUnforgeable.decode(encoded).toJSON();
    console.log(decoded);
    console.log(decoded.gPrivateBody);

    if (decoded.gPrivateBody) {
      x.gPrivate = Buffer.from(decoded.gPrivateBody.id).toString("hex");
    } else if (decoded.gDeployIdBody) {
      x.gDeployId = Buffer.from(decoded.gDeployIdBody.id).toString("hex");
    } else if (decoded.gDeployerIdBody) {
      x.gDeployerId = Buffer.from(decoded.gDeployerIdBody.id).toString("hex");
    }

    unforgeables.push(x);
  });

  return unforgeables;
};

export const rholangMapToJsObject = (map: any) => {
  const obj: { [key: string]: any } = {};
  map.kvs.forEach((kv: any) => {
    const k = kv.key.exprs[0].gString;
    const val = kv.value;
    if (val.ids && val.ids[0]) {
      obj[k] = val.ids[0].id;
    } else if (val.exprs && val.exprs[0]) {
      if (val.exprs[0].gString) {
        obj[k] = val.exprs[0].gString;
      } else if (val.exprs[0].gUri) {
        obj[k] = val.exprs[0].gUri;
      } else if (val.exprs[0].hasOwnProperty("gBool")) {
        obj[k] = val.exprs[0].gBool;
      } else if (val.exprs[0].gInt) {
        obj[k] = val.exprs[0].gInt;
      } else if (val.exprs[0].eMapBody) {
        obj[k] = rholangMapToJsObject(val.exprs[0].eMapBody);
      } else {
        console.warn("Not implemented", val);
      }
    } else if (val.unforgeables && val.unforgeables[0]) {
      const unfs = rholangUnforgeablesToJs(val.unforgeables);
      obj[k] = unfs;
    } else {
      console.warn("Not implemented", val);
    }
  });

  return obj;
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
  if (keyPair.getPublic().encode("hex") !== publicKey) {
    throw new Error("Private key and public key do not match");
  }
};

export const signSecp256k1 = (
  hash: Uint8Array,
  privateKey: string
): Uint8Array => {
  const keyPair = ec.keyFromPrivate(privateKey);

  const signature = keyPair.sign(Buffer.from(hash));
  const derSign = signature.toDER();

  if (
    !ec.verify(
      Buffer.from(hash),
      Buffer.from(derSign),
      keyPair.getPublic().encode("hex"),
      "hex"
    )
  ) {
    throw new Error("Signature verification failed");
  }

  return new Uint8Array(derSign);
};

export const getDeployData = async (
  sigAlgorithm: SigAlgorithm,
  timestamp: number,
  term: string,
  privateKey: string,
  publicKey: string,
  phloPrice = 1,
  phloLimit = 10000,
  validAfterBlockNumber = -1
): Promise<DeployData> => {
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
