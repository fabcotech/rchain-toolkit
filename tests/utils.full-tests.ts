import { deepStrictEqual } from "assert";

import {
  getDeployDataToSign,
  getDeployData,
  signEd25519,
  getBlake2Hash
} from "../src/utils";
import {
  payment,
  deployDataToSign,
  privateKey,
  publicKey,
  deployDataEd25519,
  hash
} from "../src/models/models.mock";
import { DeployData } from "../src/models/models";

let deployDataToSignFromPayment: Uint8Array;
let hashFromDeployDataToSign: Uint8Array;

const testGetDeployDataToSign = () => {
  return new Promise(async (resolve, reject) => {
    deployDataToSignFromPayment = await getDeployDataToSign(payment);
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
    }
    console.log("  ✓ utils.getBlake2Hash");
    resolve();
  });
};

const testGetDeployDataEd2519 = () => {
  return new Promise(async (resolve, reject) => {
    const deployDataFromPayment = await getDeployData(
      "ed25519",
      payment.timestamp,
      payment.term,
      privateKey,
      publicKey,
      payment.phloPrice,
      payment.phloLimit
    );
    try {
      deepStrictEqual(deployDataFromPayment, {
        ...payment,
        deployer: deployDataEd25519.deployer,
        sig: deployDataEd25519.sig,
        sigAlgorithm: deployDataEd25519.sigAlgorithm
      } as DeployData);
    } catch (err) {
      console.log("  X utils.getDeployDataEd25519");
      reject(err);
    }
    console.log("  ✓ utils.getDeployDataEd25519");
    resolve();
  });
};

const testSignEd2519 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const signatureEd25519 = signEd25519(
        hashFromDeployDataToSign,
        privateKey
      );
      deepStrictEqual(signatureEd25519, deployDataEd25519.sig);
    } catch (err) {
      console.log("  X utils.signEd25519");
      reject(err);
    }
    console.log("  ✓ utils.signEd25519");
    resolve();
  });
};

export const testUtils = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for utils.ts \n");
      await testGetDeployDataToSign();
      await testGetBlake2Hash();
      await testGetDeployDataEd2519();
      await testSignEd2519();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
