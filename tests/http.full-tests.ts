import { testPrepareDeploy } from "./prepareDeploy";
import { testDeploy } from "./deploy";
import { testDataAtName } from "./dataAtName";

export const testHttp = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for http.ts \n");
      await testPrepareDeploy();
      await testDeploy();
      await testDataAtName();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
