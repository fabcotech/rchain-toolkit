import * as path from "path";
import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import { deepStrictEqual } from "assert";

import { publicKey, payment, privateName } from "../src/models/models.mock";
import { parseEitherPrivateNamesPreview } from "../src/decoders";
import { previewPrivateNamesRaw, getGrpcDeployClient } from "../src/grpc";
import {
  privateNamePreviewResponse,
  privateNamesResponse
} from "../src/models/api.mock";
import { unforgeableWithId } from "../src/utils";
import { PrivateNamePreviewResponse } from "../src/models";

export const testPreviewPrivateNames = () => {
  return new Promise(async (resolve, reject) => {
    const client = await getGrpcDeployClient(
      "localhost:40401",
      grpc,
      protoLoader
    );

    const either = await previewPrivateNamesRaw(
      {
        user: Buffer.from(publicKey, "hex"),
        timestamp: payment.timestamp,
        nameQty: 1
      },
      client
    );

    try {
      deepStrictEqual(either, privateNamePreviewResponse);
      console.log("  ✓ grpc.previewPrivateNames");
    } catch (err) {
      console.log("  X grpc.previewPrivateNames");
      reject(err);
    }

    let privateNamesFromNode: PrivateNamePreviewResponse | undefined;
    try {
      privateNamesFromNode = await parseEitherPrivateNamesPreview(either);
      deepStrictEqual(privateNamesFromNode.ids, privateNamesResponse.ids);
      console.log("  ✓ decoders.parseEitherPrivateNamePreview");
    } catch (err) {
      console.log("  X decoders.parseEitherPrivateNamePreview");
      reject(err);
    }

    let privateNameFromNode;
    try {
      privateNameFromNode = unforgeableWithId(privateNamesFromNode.ids[0]);
      deepStrictEqual(privateNameFromNode, privateName);
      console.log("  ✓ utils.unforgeableWithId");
    } catch (err) {
      console.log("  X utils.unforgeableWithId");
      reject(err);
    }

    resolve();
  });
};
