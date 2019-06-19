import { DeployData } from "./models/models";
import {
  parseEitherDoDeploy,
  parseEitherPrivateNamePreview,
  parseEitherListeningNameData
} from "./decoders";

export const listenForDataAtName = (
  options: any,
  client: any,
  parseEither = true
) => {
  return new Promise((resolve, reject) => {
    client.listenForDataAtName(options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        if (parseEither) {
          try {
            const result = await parseEitherListeningNameData(resp);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        } else {
          resolve(resp);
        }
      }
    });
  });
};

export const doDeploy = (
  deployData: DeployData,
  client: any,
  parseEither = true
) => {
  return new Promise((resolve, reject) => {
    client.DoDeploy(deployData, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        if (parseEither) {
          try {
            const result = await parseEitherDoDeploy(resp);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        } else {
          resolve(resp);
        }
      }
    });
  });
};

export const previewPrivateNames = (
  options: any,
  client: any,
  parseEither = true
) => {
  return new Promise((resolve, reject) => {
    client.previewPrivateNames(options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        if (parseEither) {
          try {
            const result = await parseEitherPrivateNamePreview(resp);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        } else {
          resolve(resp);
        }
      }
    });
  });
};

export const createBlock = (options: any, client: any) => {
  return new Promise((resolve, reject) => {
    client.createBlock(options, async (err: any, resp: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    });
  });
};

export const getGrpcClient = (
  grpcEndPoint: string,
  grpc: any,
  protoLoader: any
) => {
  return new Promise((resolve, reject) => {
    protoLoader
      .load("./dist/protobuf/DeployService.proto", {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
      })
      .then((packageDefinition: any) => {
        const packageObject = grpc.loadPackageDefinition(packageDefinition);
        const client = new (packageObject.coop as any).rchain.casper.protocol.DeployService(
          grpcEndPoint,
          grpc.credentials.createInsecure()
        );
        resolve(client);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
