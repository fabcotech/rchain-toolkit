import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import { getGrpcDeployClient, doDeployRaw } from "../src/grpc";
import { deepStrictEqual } from "assert";
import { parseEitherDoDeploy } from "../src/decoders";
import {
  DoDeployResponse,
  payment,
  privateKey,
  publicKey
} from "../src/models";
import { getDeployData } from "../src/utils";

export const testDoDeploy = () => {
  return new Promise(async (resolve, reject) => {
    const client = await getGrpcDeployClient(
      "localhost:40401",
      grpc,
      protoLoader
    );

    const deployDataSecp256k1 = await getDeployData(
      "secp256k1",
      new Date().valueOf(),
      payment.term,
      privateKey,
      publicKey,
      payment.phloPrice,
      payment.phloLimit,
      payment.validAfterBlockNumber
    );

    const either = await doDeployRaw(deployDataSecp256k1, client);

    try {
      if (either.content !== "success") {
        throw new Error("Either should be success");
      }
      console.log("  ✓ grpc.doDeploy");
    } catch (err) {
      console.log("  X grpc.doDeploy");
      reject(err);
      return;
    }

    let doeDeployResponse: DoDeployResponse | undefined;
    try {
      doeDeployResponse = await parseEitherDoDeploy(either);
      deepStrictEqual(doeDeployResponse.message.slice(0, 8), "Success!");
      console.log("  ✓ decoders.parseEitherDoDeploy");
    } catch (err) {
      console.log("  X decoders.parseEitherDoDeploy");
      reject(err);
      return;
    }

    resolve();
  });
};
