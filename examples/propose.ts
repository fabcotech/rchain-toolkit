import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  // The propose neeeds another grpc service
  const grpcClient = await rchainToolkit.grpc.getGrpcProposeClient(
    "localhost:40402",
    grpc,
    protoLoader
  );

  let proposeResponse;
  try {
    proposeResponse = await rchainToolkit.grpc.propose({}, grpcClient);
  } catch (err) {
    console.log(err);
  }

  console.log(proposeResponse);
};

main();
