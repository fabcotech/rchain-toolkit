import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import {
  prepareDeploy,
  deploy,
  dataAtName,
  DataAtNameReponse,
  blocks
} from "../src/http";
import { getGrpcProposeClient, propose } from "../src/grpc";
import { getDeployOptions } from "../src/utils";

export const testDataAtName = () => {
  return new Promise(async (resolve, reject) => {
    const proposeClient = await getGrpcProposeClient(
      "localhost:40402",
      grpc,
      protoLoader
    );

    const validAfterBlockNumber = JSON.parse(
      await blocks("http://localhost:40403", {
        position: 1
      })
    )[0].blockNumber;

    const argv = JSON.parse(process.env.npm_config_argv);
    let privateKey;
    if (argv.remain[0] === "--private-key") {
      privateKey = argv.remain[1];
    } else {
      console.log("  X http.testDataAtName");
      console.log("private-key not found in command line");
      process.exit();
    }

    let publicKey;
    if (argv.remain[2] === "--public-key") {
      publicKey = argv.remain[3];
    } else {
      console.log("  X http.testDataAtName");
      console.log("public-key not found in command line");
      process.exit();
    }

    const timestamp = new Date().valueOf();
    const prepareDeployResponse = await prepareDeploy(
      "http://localhost:40403",
      {
        deployer: publicKey,
        timestamp: timestamp,
        nameQty: 1
      }
    );

    try {
      const deployOptions = getDeployOptions(
        "secp256k1",
        timestamp,
        'new hello, stdout(`rho:io:stdout`) in { hello!("world") | stdout!(*hello) }',
        privateKey,
        publicKey,
        1,
        1000000,
        validAfterBlockNumber || -1
      );

      const deployDataResponse = await deploy(
        "http://localhost:40403",
        deployOptions
      );
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

    const dataAtNameResponse = await dataAtName("http://localhost:40403", {
      name: {
        UnforgPrivate: { data: JSON.parse(prepareDeployResponse).names[0] }
      },
      depth: 90
    });

    if (
      (JSON.parse(dataAtNameResponse) as DataAtNameReponse).exprs[0].expr
        .ExprString.data === "world"
    ) {
      console.log("  ✓ http.testDataAtName");
    } else {
      console.log("  X http.testDataAtName");
      reject();
      return;
    }
    resolve();
  });
};
