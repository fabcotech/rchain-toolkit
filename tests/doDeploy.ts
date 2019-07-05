import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import { getGrpcDeployClient, doDeployRaw } from "../src/grpc";
import { deepStrictEqual } from "assert";
import { parseEitherDoDeploy } from "../src/decoders";
import {
  DoDeployResponse,
  deployDataEd25519,
  doDeployEd25519Response
} from "../src/models";

export const testDoDeploy = () => {
  return new Promise(async (resolve, reject) => {
    const client = await getGrpcDeployClient(
      "localhost:40401",
      grpc,
      protoLoader
    );

    const either = await doDeployRaw(deployDataEd25519, client);

    try {
      deepStrictEqual(either, doDeployEd25519Response);
      console.log("  ✓ grpc.doDeploy");
    } catch (err) {
      console.log("  X grpc.doDeploy");
      reject(err);
    }

    let doeDeployResponse: DoDeployResponse | undefined;
    try {
      doeDeployResponse = await parseEitherDoDeploy(either);
      deepStrictEqual(doeDeployResponse.message.slice(0, 8), "Success!");
      console.log("  ✓ decoders.parseEitherDoDeploy");
    } catch (err) {
      console.log("  X decoders.parseEitherDoDeploy");
      reject(err);
    }

    resolve();
  });
};
