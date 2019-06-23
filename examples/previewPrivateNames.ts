import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const grpcClient = await rchainToolkit.api.getGrpcClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  let ids;
  try {
    ids = await rchainToolkit.api.previewPrivateNames(
      {
        user: Buffer.from(
          "499819f316b7fe95d723b232ba430cf7e3b68af155eb8253905d64e1fbace058", // unforgeable name id
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
