import { DeployData } from "./models/models";
import * as rnodeProtos from "./rnode-protos";

export const getMethod = (options: any, client: any, method: string): any => {
  return new Promise((resolve, reject) => {
    client[method](options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};

// Listen for data at name

export const listenForDataAtName = (
  options: any,
  client: any
): Promise<rnodeProtos.casper.v1.ListeningNameDataResponse> => {
  return getMethod(options, client, "listenForDataAtName");
};

// Do deploy
export const doDeploy = (
  options: DeployData,
  client: any
): Promise<rnodeProtos.casper.v1.DeployResponse> => {
  return getMethod(options, client, "doDeploy");
};

// Preview private names
export const previewPrivateNames = (
  options: any,
  client: any
): Promise<rnodeProtos.casper.v1.PrivateNamePreviewResponse> => {
  return getMethod(options, client, "previewPrivateNames");
};

// Propose
export const propose = (
  options: any,
  client: any
): Promise<rnodeProtos.casper.v1.ProposeResponse> => {
  return getMethod(options, client, "propose");
};

const getClient = (
  grpcEndPoint: string,
  grpc: any,
  protoLoader: any,
  protoService: "deployService" | "proposeService"
) => {
  let path = "/protobuf/DeployServiceV1.proto";
  if (protoService === "proposeService") {
    path = "/protobuf/ProposeServiceV1.proto";
  }
  return new Promise((resolve, reject) => {
    protoLoader
      .load(__dirname + path, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
      .then((packageDefinition: any) => {
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        let client;
        if (protoService === "deployService") {
          client = new (packageObject as any).casper.v1.DeployService(
            grpcEndPoint,
            grpc.credentials.createInsecure()
          );
        } else {
          client = new (packageObject as any).casper.v1.ProposeService(
            grpcEndPoint,
            grpc.credentials.createInsecure()
          );
        }

        resolve(client);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export const getGrpcDeployClient = (
  grpcEndPoint: string,
  grpc: any,
  protoLoader: any
) => {
  return getClient(grpcEndPoint, grpc, protoLoader, "deployService");
};

export const getGrpcProposeClient = (
  grpcEndPoint: string,
  grpc: any,
  protoLoader: any
) => {
  return getClient(grpcEndPoint, grpc, protoLoader, "proposeService");
};
