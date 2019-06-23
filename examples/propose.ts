import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  // The propose neeeds another grpc service
  const grpcClient = await rchainToolkit.grpc.getGrpcProposeClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  let a;
  try {
    a = await rchainToolkit.grpc.proposeRaw({}, grpcClient);
  } catch (err) {
    console.log(err);
  }

  console.log(a);
};

main();
