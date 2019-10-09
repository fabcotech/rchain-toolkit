import { testListenForDataAtName } from "./listenForDataAtName";
import { testPreviewPrivateNames } from "./previewPrivateNames";
import { testDoDeploy } from "./doDeploy";
import { testGetBlocks } from "./getBlocks";

export const testGrpc = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for grpc.ts and decoders.ts \n");
      await testPreviewPrivateNames();
      await testDoDeploy();
      await testListenForDataAtName();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
