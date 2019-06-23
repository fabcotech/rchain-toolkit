import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const grpcClient = await rchainToolkit.grpc.getGrpcDeployClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  const deployData = await rchainToolkit.utils.getDeployData(
    "ed25519",
    new Date().valueOf(),
    `new hello in { hello!("world") }`,
    "e416638cd5a283be10a724b2b41e8f76c9e48fbbe3ccf6172bfa1293fd7ee476499819f316b7fe95d723b232ba430cf7e3b68af155eb8253905d64e1fbace058",
    "499819f316b7fe95d723b232ba430cf7e3b68af155eb8253905d64e1fbace058",
    1,
    100000
  );

  let a;
  try {
    a = await rchainToolkit.grpc.doDeploy(deployData, grpcClient);
  } catch (err) {
    console.log(err);
  }

  console.log(a);
};

main();
