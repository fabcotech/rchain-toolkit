import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import { publicKey, privateKey } from "../src/models/models.mock";
import {
  getGrpcDeployClient,
  doDeploy,
  previewPrivateNames,
  getGrpcProposeClient,
  listenForDataAtName,
  propose
} from "../src/grpc";
import {
  unforgeableWithId,
  getDeployData,
  getValueFromBlocks
} from "../src/utils";

export const testListenForDataAtName = () => {
  return new Promise(async (resolve, reject) => {
    const client = await getGrpcDeployClient(
      "localhost:40401",
      grpc,
      protoLoader
    );
    const proposeClient = await getGrpcProposeClient(
      "localhost:40401",
      grpc,
      protoLoader
    );

    const timestamp = new Date().valueOf();
    const privateNamesFromNode = await previewPrivateNames(
      {
        user: Buffer.from(publicKey, "hex"),
        timestamp: timestamp,
        nameQty: 1
      },
      client
    );

    let privateNameFromNode;
    try {
      privateNameFromNode = unforgeableWithId(privateNamesFromNode.ids[0]);
    } catch (err) {
      reject(err);
    }

    try {
      const deployData = await getDeployData(
        "secp256k1",
        timestamp,
        'new hello, stdout(`rho:io:stdout`) in { hello!("world") | stdout!(*hello) }',
        privateKey,
        publicKey,
        1,
        1000000,
        -1
      );

      await doDeploy(deployData, client);
    } catch (err) {
      reject(err);
      return;
    }

    try {
      await propose({}, proposeClient);
      console.log("  ✓ grpc.propose");
    } catch (err) {
      console.log("  X grpc.propose");
      reject(err);
      return;
    }

    const privateNameBuffer = Array.from(
      new Uint8Array(Buffer.from(privateNameFromNode, "hex"))
    );

    const listenForDataAtNameResponse = await listenForDataAtName(
      {
        name: {
          unforgeables: [
            {
              g_private_body: { id: privateNameBuffer }
            }
          ]
        },
        depth: 90
      },
      client
    );

    const valueFromBlocks = getValueFromBlocks(
      listenForDataAtNameResponse.blockResults
    );

    if (valueFromBlocks.exprs[0].gString === "world") {
      console.log("  ✓ grpc.listenForDataAtName");
      console.log("  ✓ utils.getValueFromBlocks");
    } else {
      console.log("  X grpc.listenForDataAtName");
      console.log("  ✓ utils.getValueFromBlocks");
      reject();
    }

    resolve();
  });
};
