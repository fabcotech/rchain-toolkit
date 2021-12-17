import { deepStrictEqual } from "assert";

import {
  getDeployDataToSign,
  getDeployData,
  signSecp256k1,
  getBlake2Hash,
  revAddressFromPublicKey,
  ethAddressFromPublicKey,
  publicKeyFromPrivateKey,
  toByteArray,
} from "../src/utils";
import {
  deployData,
  deployDataToSign,
  privateKey,
  publicKey,
  deployDataSecp256k1,
  hash
} from "../src/models/models.mock";

let deployDataToSignFromPayment: Uint8Array;
let hashFromDeployDataToSign: Uint8Array;

const testGetDeployDataToSign = () => {
  return new Promise(async (resolve, reject) => {
    deployDataToSignFromPayment = getDeployDataToSign(deployData);
    try {
      deepStrictEqual(
        Array.from(deployDataToSignFromPayment),
        Array.from(deployDataToSign)
      );
    } catch (err) {
      console.log("  X utils.getDeployDataToSign");
      reject(err);
    }
    console.log("  ✓ utils.getDeployDataToSign");
    resolve();
  });
};

const testGetBlake2Hash = () => {
  return new Promise(async (resolve, reject) => {
    hashFromDeployDataToSign = getBlake2Hash(deployDataToSignFromPayment);
    try {
      deepStrictEqual(Array.from(hashFromDeployDataToSign), Array.from(hash));
    } catch (err) {
      console.log("  X utils.getBlake2Hash");
      reject(err);
      return;
    }
    console.log("  ✓ utils.getBlake2Hash");
    resolve();
  });
};

const testGetDeployDataSecp256k1 = () => {
  return new Promise(async (resolve, reject) => {
    const dd = await getDeployData(
      deployData.timestamp,
      deployData.term,
      deployData.phloPrice,
      deployData.phloLimit,
      deployData.validAfterBlockNumber
    );

    try {
      deepStrictEqual(dd, deployData);
    } catch (err) {
      console.log("  X utils.getDeployDataSecp256k1");
      reject(err);
      return;
    }
    console.log("  ✓ utils.getDeployDataSecp256k1");
    resolve();
  });
};

const testSignSecp256k1 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const signatureSecp256k1 = signSecp256k1(
        hashFromDeployDataToSign,
        privateKey
      );
      deepStrictEqual(signatureSecp256k1, deployDataSecp256k1.sig);
    } catch (err) {
      console.log("  X utils.signSecp256k1");
      reject(err);
    }
    console.log("  ✓ utils.signSecp256k1");
    resolve();
  });
};

const testRevAddressFromPublicKey = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const address = revAddressFromPublicKey(publicKey);
      deepStrictEqual(
        address,
        "111141NiaMWNyB9ksJvGHeswzByooF6EC8u4K7LNxkZmsx6F7T9rG"
      );
    } catch (err) {
      console.log("  X utils.revAddressFromPublicKey");
      reject(err);
    }
    console.log("  ✓ utils.revAddressFromPublicKey");
    resolve();
  });
};

const testEthAddressFromPublicKey = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const address1 = ethAddressFromPublicKey("04e68acfc0253a10620dff706b0a1b1f1f5833ea3beb3bde2250d5f271f3563606672ebc45e0b7ea2e816ecb70ca03137b1c9476eec63d4632e990020b7b6fba39");
      deepStrictEqual(
        address1.toLowerCase(),
        "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1"
      );
      const address2 = ethAddressFromPublicKey(publicKey);
      deepStrictEqual(
        address2.toLowerCase(),
        "0xb4f99b3a1c44d32ccb2063bb8652e6c0bc33db2e"
      );
    } catch (err) {
      console.log("  X utils.ethAddressFromPublicKey");
      reject(err);
    }
    console.log("  ✓ utils.ethAddressFromPublicKey");
    resolve();
  });
};

const testPublicKeyFromPrivateKey = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const publicKey = publicKeyFromPrivateKey(
        "a2803d16030f83757a5043e5c0e28573685f6d8bf4e358bf1385d82bffa8e698"
      );
      deepStrictEqual(
        publicKey,
        "04b50dbf4e03cf9abe39238086ca74f53a9ec9f1b68efc6376cb0cd88dd263ea7b987c5a0f3c655252abdfac247d8eb76b3c93f95bbc61467a0dc78c8d32a5bbb7"
      );
    } catch (err) {
      console.log("  X utils.publicKeyFromPrivateKey");
      reject(err);
    }
    console.log("  ✓ utils.publicKeyFromPrivateKey");
    resolve();
  });
};

const testObjectToByteArray = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const obj = toByteArray({
        "a": 1,
        "b": "hello",
        "c": undefined,
      });
      deepStrictEqual(
        Buffer.from(obj).toString('hex'),
        "2a2fba012c0a0d0a052a031a016112042a0210020a120a052a031a016212092a071a0568656c6c6f0a070a052a031a0163"
      );
      const list = toByteArray(["aaa", "bbb"]);
      deepStrictEqual(
        Buffer.from(list).toString('hex'),
        "2a15a201120a072a051a036161610a072a051a03626262"
      );
      const obj2 = toByteArray({
        "a": 1,
        "b": "hello",
        "c": [1, 2, 3],
      });
      deepStrictEqual(
        Buffer.from(obj2).toString('hex'),
        "2a48ba01450a0d0a052a031a016112042a0210020a120a052a031a016212092a071a0568656c6c6f0a200a052a031a016312172a15a201120a042a0210020a042a0210040a042a021006"
      );
      const obj3 = toByteArray({
        "a": 1,
        "b": "hello",
        "c": {
          "d": 1,
          "e": "f",
        },
      });
      deepStrictEqual(
        Buffer.from(obj3).toString('hex'),
        "2a55ba01520a0d0a052a031a016112042a0210020a120a052a031a016212092a071a0568656c6c6f0a2d0a052a031a016312242a22ba011f0a0d0a052a031a016412042a0210020a0e0a052a031a016512052a031a0166"
      );
    } catch (err) {
      console.log("  X utils.varToRhoExpr");
      reject(err);
    }
    console.log("  ✓ utils.varToRhoExpr");
    resolve();
  });
};

export const testUtils = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for utils.ts \n");
      await testGetDeployDataToSign();
      await testGetBlake2Hash();
      await testGetDeployDataSecp256k1();
      await testSignSecp256k1();
      await testRevAddressFromPublicKey();
      await testEthAddressFromPublicKey();
      await testPublicKeyFromPrivateKey();
      await testObjectToByteArray();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
