"use strict";
exports.__esModule = true;
var protobufjs_1 = require("protobufjs");
exports.parseEitherListeningNameData = function (either) {
    return new Promise(function (resolve, reject) {
        if (either && either.success && either.success.response) {
            protobufjs_1.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var ListeningNameDataResponse = root.lookupType("ListeningNameDataResponse");
                var b = ListeningNameDataResponse.decode(either.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(new Error("error: GRPC error"));
        }
    });
};
exports.parseEitherPrivateNamePreview = function (either) {
    return new Promise(function (resolve, reject) {
        if (either && either.success && either.success.response) {
            protobufjs_1.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var PrivateNamePreviewResponse = root.lookupType("PrivateNamePreviewResponse");
                var b = PrivateNamePreviewResponse.decode(either.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(new Error("error: GRPC error"));
        }
    });
};
exports.parseEitherDoDeploy = function (either) {
    return new Promise(function (resolve, reject) {
        if (either && either.success && either.success.response) {
            protobufjs_1.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var DeployServiceResponse = root.lookupType("DeployServiceResponse");
                var b = DeployServiceResponse.decode(either.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(new Error("error: GRPC error"));
        }
    });
};
