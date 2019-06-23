"use strict";
exports.__esModule = true;
var protobufjs_1 = require("protobufjs");
exports.parseEitherListeningNameData = function (either) {
    return new Promise(function (resolve, reject) {
        if (either.hasOwnProperty("success")) {
            var eitherSuccess_1 = either;
            protobufjs_1.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var ListeningNameDataResponse = root.lookupType("ListeningNameDataResponse");
                var b = ListeningNameDataResponse.decode(eitherSuccess_1.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(either.error.messages);
        }
    });
};
exports.parseEitherPrivateNamesPreview = function (either) {
    return new Promise(function (resolve, reject) {
        if (either.hasOwnProperty("success")) {
            var eitherSuccess_2 = either;
            protobufjs_1.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var PrivateNamePreviewResponse = root.lookupType("PrivateNamePreviewResponse");
                var b = PrivateNamePreviewResponse.decode(eitherSuccess_2.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(either.error.messages);
        }
    });
};
exports.parseEitherDoDeploy = function (either) {
    return new Promise(function (resolve, reject) {
        if (either.hasOwnProperty("success")) {
            var eitherSuccess_3 = either;
            protobufjs_1.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var DeployServiceResponse = root.lookupType("DeployServiceResponse");
                var b = DeployServiceResponse.decode(eitherSuccess_3.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(either.error.messages);
        }
    });
};
exports.parseEitherPropose = function (either) {
    return new Promise(function (resolve, reject) {
        if (either.hasOwnProperty("success")) {
            var eitherSuccess_4 = either;
            protobufjs_1.load(__dirname + "/protobuf/ProposeService.proto", function (err, root) {
                if (err || !root) {
                    reject(err);
                    return;
                }
                var ProposeResponse = root.lookupType("PrivateNamePreviewResponse");
                var b = ProposeResponse.decode(eitherSuccess_4.success.response.value);
                resolve(b);
            });
        }
        else {
            reject(either.error.messages);
        }
    });
};
