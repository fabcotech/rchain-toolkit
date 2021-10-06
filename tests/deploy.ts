import { deploy, blocks } from "../src/http";
import { deepStrictEqual } from "assert";
import { deployData } from "../src/models";
import { getDeployOptions } from "../src/utils";

export const testDeploy = () => {
  const argv = process.env.npm_lifecycle_script
    .split(" ")
    .map((a) => a.replace('"', "").replace('"', ""));
  let privateKey = argv[3];
  if (!privateKey) {
    console.log("  X http.testDataAtName");
    console.log("private-key not found in command line");
    process.exit();
  }

  let publicKey = argv[5];
  if (!publicKey) {
    console.log("  X http.testDataAtName");
    console.log("public-key not found in command line");
    process.exit();
  }

  return new Promise(async (resolve, reject) => {
    const validAfterBlockNumber = JSON.parse(
      await blocks("http://localhost:40403", {
        position: 1,
      })
    )[0].blockNumber;

    const deployOptions = getDeployOptions(
      "secp256k1",
      new Date().valueOf(),
      deployData.term,
      privateKey,
      publicKey,
      deployData.phloPrice,
      deployData.phloLimit,
      validAfterBlockNumber || 1
    );
    const response = await deploy("http://localhost:40403", deployOptions);

    try {
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
