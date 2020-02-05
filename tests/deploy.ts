import { deploy } from "../src/http";
import { deepStrictEqual } from "assert";
import { deployData, privateKey, publicKey } from "../src/models";
import { getDeployOptions } from "../src/utils";

export const testDeploy = () => {
  return new Promise(async (resolve, reject) => {
    const deployOptions = getDeployOptions(
      "secp256k1",
      new Date().valueOf(),
      deployData.term,
      privateKey,
      publicKey,
      deployData.phloPrice,
      deployData.phloLimit,
      deployData.validAfterBlockNumber || 1
    );
    const response = await deploy("localhost:40403", deployOptions);

    try {
      if (response.error) {
        throw new Error(
          "There was an error when deploying : " + response.error.messages
        );
      }

      deepStrictEqual(response.slice(1, 9), "Success!");
      console.log("  ✓ http.deploy");
    } catch (err) {
      console.log("  X http.deploy");
      reject(err);
      return;
    }

    resolve();
  });
};
