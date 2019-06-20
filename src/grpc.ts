import { DeployData } from "./models/models";
import {
  parseEitherDoDeploy,
  parseEitherPrivateNamesPreview,
  parseEitherListeningNameData,
  parseEitherPropose
} from "./decoders";
import {
  EitherSuccess,
  EitherError,
  Either,
  PrivateNamePreviewResponse,
  ListeningNameDataResponse
} from "./models";

// Listen for data at name

export const listenForDataAtNameRaw = (
  options: any,
  client: any
): Promise<Either> => {
  return new Promise((resolve, reject) => {
    client.listenForDataAtName(options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};
export const listenForDataAtName = (
  options: any,
  client: any
): Promise<ListeningNameDataResponse> => {
  return new Promise(async (resolve, reject) => {
    const either = await listenForDataAtNameRaw(options, client);
    if (either.hasOwnProperty("success")) {
      const dataAtName = await parseEitherListeningNameData(
        either as EitherSuccess
      );
      resolve(dataAtName);
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

// Do deploy

export const doDeployRaw = (
  deployData: DeployData,
  client: any
): Promise<Either> => {
  return new Promise((resolve, reject) => {
    client.DoDeploy(deployData, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};
export const doDeploy = (deployData: DeployData, client: any) => {
  return new Promise(async (resolve, reject) => {
    const either = await doDeployRaw(deployData, client);
    if (either.hasOwnProperty("success")) {
      const doDeployResult = await parseEitherDoDeploy(either as EitherSuccess);
      resolve(doDeployResult);
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

// Preview private names

export const previewPrivateNamesRaw = (
  options: any,
  client: any
): Promise<Either> => {
  return new Promise((resolve, reject) => {
    client.previewPrivateNames(options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};
export const previewPrivateNames = (
  options: any,
  client: any
): Promise<PrivateNamePreviewResponse> => {
  return new Promise(async (resolve, reject) => {
    const either = await previewPrivateNamesRaw(options, client);
    if (either.hasOwnProperty("success")) {
      const doDeployResult = await parseEitherPrivateNamesPreview(
        either as EitherSuccess
      );
      resolve(doDeployResult);
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

// Propose

export const proposeRaw = (options: any, client: any): Promise<Either> => {
  return new Promise((resolve, reject) => {
    client.propose(options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};
export const propose = (
  options: any,
  client: any
): Promise<PrivateNamePreviewResponse> => {
  return new Promise(async (resolve, reject) => {
    const either = await proposeRaw(options, client);
    if (either.hasOwnProperty("success")) {
      const doDeployResult = await parseEitherPropose(either as EitherSuccess);
      resolve(doDeployResult);
    } else {
      reject((either as EitherError).error.messages);
    }
  });
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
