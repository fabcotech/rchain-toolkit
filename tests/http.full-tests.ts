import { testPrepareDeploy } from "./prepareDeploy";
import { testStatus } from "./status";
import { testDeploy } from "./deploy";
import { testEasyDeploy } from "./easyDeploy";
import { testDataAtName } from "./dataAtName";

export const testHttp = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for http.ts \n");
      await testStatus();
      await testPrepareDeploy();
      await testDeploy();
      await testDataAtName();
      await testEasyDeploy();
      console.log("\n");
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
};
