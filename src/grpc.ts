import { DeployData } from "./models/models";
import * as decoders from "./decoders";
import {
  EitherSuccess,
  EitherError,
  Either,
  PrivateNamePreviewResponse,
  ListeningNameDataResponse
} from "./models";

export const getFull = (
  options: any,
  client: any,
  grpcMethod: string,
  parseMethod: string
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const either = await getRaw(options, client, grpcMethod);
    if (either.hasOwnProperty("success")) {
      const resp = await (decoders as any)[parseMethod](
        either as EitherSuccess
      );
      resolve(resp);
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

export const getRaw = (
  options: any,
  client: any,
  method: string
): Promise<Either> => {
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

export const listenForDataAtNameRaw = (
  options: any,
  client: any
): Promise<Either> => {
  return getRaw(options, client, "listenForDataAtName");
};
export const listenForDataAtName = (
  options: any,
  client: any
): Promise<ListeningNameDataResponse> => {
  return getFull(
    options,
    client,
    "listenForDataAtName",
    "parseEitherListeningNameData"
  );
};

// Do deploy

export const doDeployRaw = (
  options: DeployData,
  client: any
): Promise<Either> => {
  return getRaw(options, client, "DoDeploy");
};
export const doDeploy = (deployData: DeployData, client: any) => {
  return getFull(deployData, client, "DoDeploy", "parseEitherDoDeploy");
};

// Preview private names

export const previewPrivateNamesRaw = (
  options: any,
  client: any
): Promise<Either> => {
  return getRaw(options, client, "previewPrivateNames");
};

export const previewPrivateNames = (
  options: any,
  client: any
): Promise<PrivateNamePreviewResponse> => {
  return getFull(
    options,
    client,
    "previewPrivateNames",
    "parseEitherPrivateNamesPreview"
  );
};

// getBlocks

export const getBlocksRaw = (options: any, client: any): Promise<Either> => {
  return getRaw(options, client, "getBlocks");
};

export const getBlocks = (options: any, client: any): Promise<any> => {
  return getFull(options, client, "getBlocks", "parseGetBlocks");
};

// Propose

export const propose = (options: any, client: any): Promise<Either> => {
  return getRaw(options, client, "propose");
};

const getClient = (
  grpcEndPoint: string,
  grpc: any,
  protoLoader: any,
  protoService: "deployService" | "proposeService"
) => {
  let path = "/protobuf/DeployService.proto";
  if (protoService === "proposeService") {
    path = "/protobuf/ProposeService.proto";
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
          client = new (packageObject.coop as any).rchain.casper.protocol.DeployService(
            grpcEndPoint,
            grpc.credentials.createInsecure()
          );
        } else {
          client = new (packageObject.coop as any).rchain.casper.protocol.ProposeService(
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
