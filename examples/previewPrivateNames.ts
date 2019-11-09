import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const grpcClient = await rchainToolkit.grpc.getGrpcDeployClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  let ids;
  try {
    ids = await rchainToolkit.grpc.previewPrivateNames(
      {
        user: Buffer.from(
          "041e4b07f1d4e6f3d088ad0b9fcef8e1ded5ac337a35db332ab8d8b8d42553c35cd3032d437f3a33dc9fb0ce6817ec51a2fedbce74c646b797ca0adafe5c5be24f", // public key
          "hex"
        ),
        timestamp: 1560802892221,
        nameQty: 1
      },
      grpcClient
    );
  } catch (err) {
    console.log(err);
  }

  console.log(ids);
};

main();
