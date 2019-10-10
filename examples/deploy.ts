import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const grpcClient = await rchainToolkit.grpc.getGrpcDeployClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  const deployData = await rchainToolkit.utils.getDeployData(
    "secp256k1",
    new Date().valueOf(),
    `new hello in { hello!("world") }`,
    "de34f27c7a542935e64b8adc6c01511bb669e5c97e61f5fd582b1fa990fded87",
    "041e4b07f1d4e6f3d088ad0b9fcef8e1ded5ac337a35db332ab8d8b8d42553c35cd3032d437f3a33dc9fb0ce6817ec51a2fedbce74c646b797ca0adafe5c5be24f",
    1,
    100000,
    -1
  );

  let deployResponse;
  try {
    deployResponse = await rchainToolkit.grpc.doDeploy(deployData, grpcClient);
  } catch (err) {
    console.log(err);
  }

  console.log(deployResponse);
};

main();
