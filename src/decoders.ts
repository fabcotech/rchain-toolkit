import { load } from "protobufjs";
import {
  Either,
  EitherSuccess,
  EitherError,
  PrivateNamePreviewResponse,
  DoDeployResponse
} from "./models";

export const parseEither = (either: Either, proto: string): Promise<any> => {
  const path = "/protobuf/DeployService.proto";
  return new Promise((resolve, reject) => {
    if (either.hasOwnProperty("success")) {
      const eitherSuccess: EitherSuccess = either as EitherSuccess;
      load(__dirname + path, function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const resp = root.lookupType(proto);
        const decoded = resp.decode(eitherSuccess.success.response.value);
        resolve((decoded as unknown) as any);
      });
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherListeningNameData = (either: Either): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await parseEither(either, "ListeningNameDataResponse");
      resolve(resp);
    } catch (err) {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherPrivateNamesPreview = (
  either: Either
): Promise<PrivateNamePreviewResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await parseEither(either, "PrivateNamePreviewResponse");
      resolve(resp);
    } catch (err) {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherDoDeploy = (
  either: Either
): Promise<DoDeployResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await parseEither(either, "DeployServiceResponse");
      resolve(resp);
    } catch (err) {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherGetBlocks = (either: Either): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await parseEither(either, "getBlocks");
      resolve(resp);
    } catch (err) {
      reject((either as EitherError).error.messages);
    }
  });
};
