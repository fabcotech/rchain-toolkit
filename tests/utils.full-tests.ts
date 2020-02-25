import { deepStrictEqual } from "assert";

import {
  getDeployDataToSign,
  getDeployData,
  signSecp256k1,
  getBlake2Hash,
  revAddressFromPublicKey,
  publicKeyFromPrivateKey
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

export const testUtils = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for utils.ts \n");
      await testGetDeployDataToSign();
      await testGetBlake2Hash();
      await testGetDeployDataSecp256k1();
      await testSignSecp256k1();
      await testRevAddressFromPublicKey();
      await testPublicKeyFromPrivateKey();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
