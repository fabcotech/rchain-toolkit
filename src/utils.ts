import * as nacl from "tweetnacl";
import { blake2bInit, blake2bUpdate, blake2bFinal } from "blakejs";
import keccak256 from "keccak256";
import secp256k1 from "secp256k1";
import { Writer } from "protobufjs";
import { load } from "protobufjs";
import { Payment, DeployData, SigAlgorithm } from "./models/models";
import { DataWithBlockInfo, Par } from "./models";

export const getValueFromBlocks = (blockResults: DataWithBlockInfo[]): Par => {
  for (let i = 0; i < blockResults.length; i += 1) {
    const block = blockResults[i];
    for (let j = 0; j < block.postBlockData.length; j += 1) {
      const data = block.postBlockData[j];
      if (data) {
        return data;
      }
    }
  }
  throw new Error("Not data found in any block");
};

export const rholangMapToJsObject = (map: any): { [key: string]: any } => {
  const obj: { [key: string]: any } = {};
  map.kvs.forEach((kv: any) => {
    const k = kv.key.exprs[0].g_string;

    const val = kv.value;
    if (val.ids && val.ids[0]) {
      obj[k] = val.ids[0].id;
    } else if (val.exprs && val.exprs[0].g_string) {
      obj[k] = val.exprs[0].g_string;
    } else if (val.exprs && val.exprs[0].g_uri) {
      obj[k] = val.exprs[0].g_uri;
    } else if (val.exprs && val.exprs[0].hasOwnProperty("g_bool")) {
      obj[k] = val.exprs[0].g_bool;
    } else if (val.exprs && val.exprs[0].g_int) {
      obj[k] = val.exprs[0].g_int;
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
  phloLimit = 10000000
): Payment => {
  return {
    timestamp: timestamp,
    term: term,
    phloLimit: phloLimit,
    phloPrice: phloPrice
  };
};

export const getDeployDataToSign = (payment: Payment): Promise<Uint8Array> => {
  return new Promise((resolve, reject) => {
    load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
      if (err || !root) {
        reject(err);
        return;
      }
      const DeployDataType = root.lookupType("DeployData");

      const b = DeployDataType.encode({
        ...payment,
        deployer: null,
        sig: null,
        sigAlgorithm: null
      }).finish();

      resolve(b);
    });
  });
};

export const getBlake2Hash = (toHash: Uint8Array): Uint8Array => {
  const context = blake2bInit(32, null);
  blake2bUpdate(context, toHash);
  return blake2bFinal(context);
};

export const getKeccak256Hash = (toHash: Uint8Array): Uint8Array => {
  const hash = keccak256(Buffer.from(toHash));
  return new Uint8Array(hash);
};

export const verifyPrivateAndPublicKey = (
  privateKey: string,
  publicKey: string
) => {
  const publicKeyFromPrivateKey = secp256k1.publicKeyCreate(
    Buffer.from(privateKey, "hex")
  );
  if (publicKeyFromPrivateKey.toString("hex") !== publicKey) {
    throw new Error("Private key and public key do not match");
  }
};

export const signSecp256k1 = (
  hash: Uint8Array,
  privateKey: string
): Uint8Array => {
  const pubKey = secp256k1.publicKeyCreate(Buffer.from(privateKey, "hex"));
  const sigObj = secp256k1.sign(hash, Buffer.from(privateKey, "hex"));
  if (!secp256k1.verify(hash, sigObj.signature, pubKey)) {
    throw new Error("Signature verification failed");
  }

  return sigObj.signature;
};

export const signEd25519 = (
  hash: Uint8Array,
  privateKey: string
): Uint8Array => {
  return nacl.sign.detached(hash, Buffer.from(privateKey, "hex"));
};

export const getDeployData = async (
  sigAlgorithm: SigAlgorithm,
  timestamp: number,
  term: string,
  privateKey: string,
  publicKey: string,
  phloPrice = 1,
  phloLimit = 10000
): Promise<DeployData> => {
  const payment = getPayment(timestamp, term, phloPrice, phloLimit);
  const toSign = await getDeployDataToSign(payment);
  const hash = getBlake2Hash(toSign);

  let signature: Uint8Array;
  if (sigAlgorithm === "ed25519") {
    signature = await signEd25519(hash, privateKey);
  } else if (sigAlgorithm === "secp256k1") {
    signature = await signSecp256k1(hash, privateKey);
  } else {
    throw new Error("Unsupported algorithm");
  }

  return {
    ...payment,
    deployer: Buffer.from(publicKey, "hex"),
    sig: signature,
    sigAlgorithm: "ed25519"
  };
};
