import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "rchain-toolkit";

const main = async () => {
  const grpcClient = await rchainToolkit.grpc.getGrpcClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  const unforgeableName =
    "a8c451c10c68c8232e9496cf904158ba716af008479151733cf210f1ec8964f1";
  const unforgeableNameBuffer = Buffer.from(unforgeableName, "hex");

  const listenForDataAtNameResponse = await rchainToolkit.grpc.listenForDataAtName(
    {
      name: {
        unforgeables: [
          {
            g_private_body: { id: unforgeableNameBuffer }
          }
        ]
      },
      depth: 90
    },
    grpcClient
  );

  console.log(listenForDataAtNameResponse);
};

main();
