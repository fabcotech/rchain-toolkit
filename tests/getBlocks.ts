import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";

import { getGrpcDeployClient, getBlocksRaw } from "../src/grpc";
import { deepStrictEqual } from "assert";
import { parseEitherGetBlocks } from "../src/decoders";

export const testGetBlocks = () => {
  return new Promise(async (resolve, reject) => {
    const client = await getGrpcDeployClient(
      "localhost:40401",
      grpc,
      protoLoader
    );

    const either = await getBlocksRaw({ depth: 1 }, client);

    let getBlocksResponse: any | undefined;
    try {
      getBlocksResponse = await parseEitherGetBlocks(either);
      deepStrictEqual(getBlocksResponse.message.slice(0, 8), "Success!");
      console.log("  ✓ decoders.parseEitherGetBlocks");
      resolve();
    } catch (err) {
      console.log("  X decoders.parseEitherGetBlocks");
      reject(err);
    }
  });
};
