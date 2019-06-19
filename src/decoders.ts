import { load } from "protobufjs";

export const parseEitherListeningNameData = (either: any): any => {
  return new Promise((resolve, reject) => {
    if (either && either.success && either.success.response) {
      load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const ListeningNameDataResponse = root.lookupType(
          "ListeningNameDataResponse"
        );

        const b = ListeningNameDataResponse.decode(
          either.success.response.value
        );
        resolve(b);
      });
    } else {
      reject(new Error("error: GRPC error"));
    }
  });
};

export const parseEitherPrivateNamePreview = (either: any): any => {
  return new Promise((resolve, reject) => {
    if (either && either.success && either.success.response) {
      load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const PrivateNamePreviewResponse = root.lookupType(
          "PrivateNamePreviewResponse"
        );
        const b = PrivateNamePreviewResponse.decode(
          either.success.response.value
        );
        resolve(b);
      });
    } else {
      reject(new Error("error: GRPC error"));
    }
  });
};

export const parseEitherDoDeploy = (either: any): any => {
  return new Promise((resolve, reject) => {
    if (either && either.success && either.success.response) {
      load(__dirname + "/protobuf/DeployService.proto", function(err, root) {
        if (err || !root) {
          reject(err);
          return;
        }
        const DeployServiceResponse = root.lookupType("DeployServiceResponse");
        console.log(DeployServiceResponse);
        const b = DeployServiceResponse.decode(either.success.response.value);
        resolve(b);
      });
    } else {
      reject(new Error("error: GRPC error"));
    }
  });
};
