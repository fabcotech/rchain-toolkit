import { blake2bInit, blake2bUpdate, blake2bFinal } from "blakejs";
import * as elliptic from "elliptic";
import { Writer } from "protobufjs";

import { Payment, DeployData, SigAlgorithm } from "./models";
import * as rnodeProtos from "./rnode-protos";

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

const rholangUnforgeablesToJs = (unfs: any) => {
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

export const rholangMapToJsObject = (map: any) => {
  const obj: { [key: string]: any } = {};
  map.kvs.forEach((kv: any) => {
    const k = kv.key.exprs[0].g_string;
    const val = kv.value;
    if (val.ids && val.ids[0]) {
      obj[k] = val.ids[0].id;
    } else if (val.exprs && val.exprs[0]) {
      if (val.exprs[0].g_string) {
        obj[k] = val.exprs[0].g_string;
      } else if (val.exprs[0].g_uri) {
        obj[k] = val.exprs[0].g_uri;
      } else if (val.exprs[0].hasOwnProperty("g_bool")) {
        obj[k] = val.exprs[0].g_bool;
      } else if (val.exprs[0].g_int) {
        obj[k] = val.exprs[0].g_int;
      } else if (val.exprs[0].e_map_body) {
        obj[k] = rholangMapToJsObject(val.exprs[0].e_map_body);
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

  const signature = keyPair.sign(Buffer.from(hash), { canonical: true });
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
