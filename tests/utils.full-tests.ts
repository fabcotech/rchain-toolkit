import { deepStrictEqual } from "assert";

import {
  getDeployDataToSign,
  getDeployData,
  signSecp256k1,
  getBlake2Hash,
  revAddressFromPublicKey
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

export const testUtils = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for utils.ts \n");
      await testGetDeployDataToSign();
      await testGetBlake2Hash();
      await testGetDeployDataSecp256k1();
      await testSignSecp256k1();
      await testRevAddressFromPublicKey();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
