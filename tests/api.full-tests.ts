import * as path from "path";
import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import { deepStrictEqual } from "assert";

import {
  publicKey,
  payment,
  privateName,
  deployDataEd25519
} from "../src/models/models.mock";
import {
  parseEitherPrivateNamePreview,
  parseEitherDoDeploy
} from "../src/decoders";
import { previewPrivateNames, doDeploy } from "../src/api";
import {
  privateNamePreviewResponse,
  privateNames,
  doDeployEd25519Response
} from "../src/models/api.mock";
import { unforgeableWithId } from "../src/utils";

const testPreviewPrivateNames = () => {
  return new Promise(async (resolve, reject) => {
    protoLoader
      .load(path.resolve(__dirname, "../src/protobuf/DeployService.proto"), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
      .then(packageDefinition => {
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        const client = new (packageObject.coop as any).rchain.casper.protocol.DeployService(
          `localhost:40401`,
          grpc.credentials.createInsecure()
        );
        previewPrivateNames(
          {
            user: Buffer.from(publicKey, "hex"),
            timestamp: payment.timestamp,
            nameQty: 1
          },
          client,
          false
        )
          .then(async either => {
            try {
              deepStrictEqual(either, privateNamePreviewResponse);
              console.log("  ✓ api.previewPrivateNames");
            } catch (err) {
              console.log("  X api.previewPrivateNames");
              reject(err);
            }
            let privateNamesFromNode;
            try {
              privateNamesFromNode = await parseEitherPrivateNamePreview(
                either
              );
              deepStrictEqual(privateNamesFromNode.ids, privateNames.ids);
              console.log("  ✓ decoders.parseEitherPrivateNamePreview");
            } catch (err) {
              console.log("  X decoders.parseEitherPrivateNamePreview");
              reject(err);
            }

            let privateNameFromNode;
            try {
              privateNameFromNode = unforgeableWithId(
                privateNamesFromNode.ids[0]
              );
              deepStrictEqual(privateNameFromNode, privateName);
              console.log("  ✓ utils.unforgeableWithId");
            } catch (err) {
              console.log("  X utils.unforgeableWithId");
              reject(err);
            }
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
  });
};

const testDoDeploy = () => {
  return new Promise(async (resolve, reject) => {
    protoLoader
      .load(path.resolve(__dirname, "../src/protobuf/DeployService.proto"), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
      .then(packageDefinition => {
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        const client = new (packageObject.coop as any).rchain.casper.protocol.DeployService(
          `localhost:40401`,
          grpc.credentials.createInsecure()
        );
        doDeploy(deployDataEd25519, client, false)
          .then(async either => {
            try {
              deepStrictEqual(either, doDeployEd25519Response);
              console.log("  ✓ api.doDeploy");
            } catch (err) {
              console.log("  X api.doDeploy");
              reject(err);
            }

            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
  });
};

const testCreateBlock = () => {
  return new Promise(async (resolve, reject) => {
    protoLoader
      .load(path.resolve(__dirname, "../src/protobuf/DeployService.proto"), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
      .then(packageDefinition => {
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        const client = new (packageObject.coop as any).rchain.casper.protocol.DeployService(
          `localhost:40401`,
          grpc.credentials.createInsecure()
        );
        doDeploy(deployDataEd25519, client)
          .then(async either => {
            try {
              deepStrictEqual(either, doDeployEd25519Response);
              console.log("  ✓ api.doDeploy");
            } catch (err) {
              console.log("  X api.doDeploy");
              reject(err);
            }

            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
  });
};

export const testApi = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for api.ts and decoders.ts \n");
      await testPreviewPrivateNames();
      await testDoDeploy();
      console.log("\n");
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
