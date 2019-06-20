import { load } from "protobufjs";
import {
  Either,
  EitherSuccess,
  EitherError,
  PrivateNamePreviewResponse,
  DoDeployResponse
} from "./models";

export const parseEitherListeningNameData = (either: Either): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (either.hasOwnProperty("success")) {
      const eitherSuccess: EitherSuccess = either as EitherSuccess;
      load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const ListeningNameDataResponse = root.lookupType(
          "ListeningNameDataResponse"
        );

        const b = ListeningNameDataResponse.decode(
          eitherSuccess.success.response.value
        );
        resolve(b);
      });
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherPrivateNamesPreview = (
  either: Either
): Promise<PrivateNamePreviewResponse> => {
  return new Promise((resolve, reject) => {
    if (either.hasOwnProperty("success")) {
      const eitherSuccess: EitherSuccess = either as EitherSuccess;
      load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const PrivateNamePreviewResponse = root.lookupType(
          "PrivateNamePreviewResponse"
        );
        const b = PrivateNamePreviewResponse.decode(
          eitherSuccess.success.response.value
        );
        resolve((b as unknown) as PrivateNamePreviewResponse);
      });
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherDoDeploy = (
  either: Either
): Promise<DoDeployResponse> => {
  return new Promise((resolve, reject) => {
    if (either.hasOwnProperty("success")) {
      const eitherSuccess: EitherSuccess = either as EitherSuccess;
      load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const DeployServiceResponse = root.lookupType("DeployServiceResponse");
        const b = DeployServiceResponse.decode(
          eitherSuccess.success.response.value
        );
        resolve((b as unknown) as DoDeployResponse);
      });
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};

export const parseEitherPropose = (either: Either): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (either.hasOwnProperty("success")) {
      const eitherSuccess: EitherSuccess = either as EitherSuccess;
      load(__dirname + "/protobuf/ProposeService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const ProposeResponse = root.lookupType("PrivateNamePreviewResponse");
        const b = ProposeResponse.decode(eitherSuccess.success.response.value);
        resolve((b as unknown) as any);
      });
    } else {
      reject((either as EitherError).error.messages);
    }
  });
};
