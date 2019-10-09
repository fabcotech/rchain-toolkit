import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { deepStrictEqual } from "assert";

import { publicKey, payment, privateName } from "../src/models/models.mock";
import { previewPrivateNamesRaw, getGrpcDeployClient } from "../src/grpc";
import { privateNamePreviewResponse } from "../src/models/api.mock";
import { unforgeableWithId } from "../src/utils";

export const testPreviewPrivateNames = () => {
  return new Promise(async (resolve, reject) => {
    const client = await getGrpcDeployClient(
      "localhost:40401",
      grpc,
      protoLoader
    );

    const response = await previewPrivateNamesRaw(
      {
        user: Buffer.from(publicKey, "hex"),
        timestamp: payment.timestamp,
        nameQty: 1
      },
      client
    );

    try {
      deepStrictEqual(response, privateNamePreviewResponse);
      console.log("  ✓ grpc.previewPrivateNames");
    } catch (err) {
      console.log("  X grpc.previewPrivateNames");
      reject(err);
    }

    let privateNameFromNode;
    try {
      privateNameFromNode = unforgeableWithId(
        Buffer.from(response.payload.ids[0])
      );
      deepStrictEqual(privateNameFromNode, privateName);
      console.log("  ✓ utils.unforgeableWithId");
    } catch (err) {
      console.log("  X utils.unforgeableWithId");
      reject(err);
    }

    resolve();
  });
};
