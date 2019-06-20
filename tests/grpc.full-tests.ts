import * as path from "path";
import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import { deepStrictEqual } from "assert";

import {
  publicKey,
  payment,
  privateName,
  deployDataEd25519,
  privateKey
} from "../src/models/models.mock";
import {
  parseEitherPrivateNamesPreview,
  parseEitherDoDeploy
} from "../src/decoders";
import {
  previewPrivateNamesRaw,
  doDeployRaw,
  getGrpcDeployClient,
  doDeploy,
  previewPrivateNames,
  propose,
  getGrpcProposeClient,
  listenForDataAtName,
  proposeRaw
} from "../src/grpc";
import {
  privateNamePreviewResponse,
  privateNamesResponse,
  doDeployEd25519Response
} from "../src/models/api.mock";
import {
  unforgeableWithId,
  getDeployData,
  getValueFromBlocks
} from "../src/utils";
import { PrivateNamePreviewResponse, DoDeployResponse } from "../src/models";

const testPreviewPrivateNames = () => {
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
      console.log("  ✓ api.previewPrivateNames");
    } catch (err) {
      console.log("  X api.previewPrivateNames");
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

const testDoDeploy = () => {
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

const testListenForDataAtName = () => {
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

    const deployData = await getDeployData(
      "ed25519",
      timestamp,
      `new hello in { hello!(89)}`,
      privateKey,
      publicKey,
      1,
      1000000
    );

    await doDeploy(deployData, client);

    try {
      await proposeRaw({}, proposeClient);
      console.log("  ✓ grpc.proposeRaw");
    } catch (err) {
      console.log("  X grpc.proposeRaw");
      reject(err);
    }

    const privateNameBuffer = Buffer.from(privateNameFromNode, "hex");
    const privateNameRequest = {
      ids: [{ id: new Uint8Array(privateNameBuffer) }]
    };
    // we could have done simply :
    // const privateNameRequest = { ids: [{ id: new Uint8Array(privateNamesFromNode.ids[0]) }] };
    const listenForDataAtNameResponse = await listenForDataAtName(
      {
        name: privateNameRequest,
        depth: 90
      },
      client
    );

    const valueFromBlocks = getValueFromBlocks(
      listenForDataAtNameResponse.blockResults
    );

    console.log(valueFromBlocks);

    resolve();
  });
};

export const testGrpc = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("full tests running for api.ts and decoders.ts \n");
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
