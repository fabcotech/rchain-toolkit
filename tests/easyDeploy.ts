import { easyDeploy } from "../src/http";
import { deployData } from "../src/models";

export const testEasyDeploy = () => {
  const argv = process.env.npm_lifecycle_script
    .split(" ")
    .map((a) => a.replace('"', "").replace('"', ""));
  let privateKey = argv[3];
  if (!privateKey) {
    console.log("  X http.testDataAtName");
    console.log("private-key not found in command line");
    process.exit();
  }

  return new Promise(async (resolve, reject) => {

    const response = await easyDeploy("http://localhost:40403",
      deployData.term,
      privateKey,
      'auto',
      deployData.phloLimit,
      30000
    );

    try {
      const parsed = JSON.parse(response)
      if (parsed.hasOwnProperty("exprs") && parsed.exprs.length === 1) {
        console.log("  ✓ http.easyDeploy");
      } else {
        console.log(response)
        throw new Error("Invalid response")
      }
    } catch (err) {
      console.log("  X http.easyDeploy");
      reject(err);
      return;
    }

    resolve(null);
  });
};
