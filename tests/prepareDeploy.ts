import { deepStrictEqual } from "assert";

import { publicKey, deployData } from "../src/models/models.mock";
import { prepareDeploy, PrepareDeployResponse } from "../src/http";
import { privateNamePreviewResponse } from "../src/models/api.mock";

export const testPrepareDeploy = () => {
  return new Promise(async (resolve, reject) => {
    const response = await prepareDeploy("http://localhost:40403", {
      deployer: publicKey,
      timestamp: deployData.timestamp,
      nameQty: 1
    });

    try {
      deepStrictEqual(
        (JSON.parse(response) as PrepareDeployResponse).names,
        privateNamePreviewResponse.names
      );
      console.log("  ✓ http.prepareDeploy");
    } catch (err) {
      console.log("  X http.prepareDeploy");
      reject(err);
    }

    resolve();
  });
};
