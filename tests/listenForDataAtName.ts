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

    const deployData = await getDeployData(
      "ed25519",
      timestamp,
      'new hello in { hello!("world") }',
      privateKey,
      publicKey,
      1,
      1000000
    );

    try {
      await doDeploy(deployData, client);
    } catch (err) {
      console.log(err);
      reject(err);
    }

    try {
      await propose({}, proposeClient);
      console.log("  ✓ grpc.propose");
    } catch (err) {
      console.log("  X grpc.propose");
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

    /*
    TODO: there is no trace of the "world" string in the result, why ????
    */
    /*
      JSON.stringify(listenForDataAtNameResponse):

      {"blockResults":[{"postBlockData":[{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{"bundles":[{"body":{"unforgeables":[{"gPrivateBody":{"id":"Rku0kZoeQwiZlgtfVNG10FSpoPx4SrqRaXGz2IEdUm4="}}]},"writeFlag":true}]}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{"bundles":[{"body":{"unforgeables":[{"gPrivateBody":{"id":"AtGtSLqay0SERq9m4F3ddgtUDeZ3x4ILk9bVJnY9FV8="}}]},"writeFlag":true}]}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{"bundles":[{"body":{"unforgeables":[{"gPrivateBody":{"id":"slozgjNNKgNUAADu+1M7AcQf25EtDzi78ZA5HKlV10A="}}]},"writeFlag":true}]}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{"bundles":[{"body":{"unforgeables":[{"gPrivateBody":{"id":"FSpzdduM1wHQnVbVbz93gW+ee6TDaUheXIxFsmOiTmQ="}}]},"writeFlag":true}]}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{"bundles":[{"body":{"unforgeables":[{"gPrivateBody":{"id":"KYACq6uoO4wK4GW30l5C4bPkjUuwCiDzxOeQPYBr2hs="}}]},"writeFlag":true}]}]}}]},{"exprs":[{"eTupleBody":{"ps":[{"exprs":[{"gBool":true}]},{}]}}]}],"block":{"blockHash":"7b72fb54f23253829ac0197bb5b5fc4d1fd021462e101fdbca049d241486a789","blockSize":"260592","version":"1","deployCount":14,"tupleSpaceHash":"a118af32f29d1b8bfcbb5a9ed3a2c51fc586e361a1a0e5444f2e1264b716dea0","timestamp":"1561316050861","faultTolerance":-0.3333333432674408}}],"length":1}
   */

    const valueFromBlocks = getValueFromBlocks(
      listenForDataAtNameResponse.blockResults
    );

    resolve();
  });
};
