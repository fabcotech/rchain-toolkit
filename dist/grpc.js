"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMethod = (options, client, method) => {
    return new Promise((resolve, reject) => {
        client[method](options, async (err, resp) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(resp);
            }
        });
    });
};
// Get block
exports.getBlock = (options, client) => {
    return exports.getMethod(options, client, "getBlock");
};
// Get blocks
exports.getBlocks = (options, client) => {
    return exports.getMethod(options, client, "getBlocks");
};
// Get blocks
exports.lastFinalizedBlock = (client) => {
    return exports.getMethod(undefined, client, "lastFinalizedBlock");
};
exports.doDeploy = (options, client) => {
    return exports.getMethod(options, client, "doDeploy");
};
// Preview private names
exports.previewPrivateNames = (options, client) => {
    return exports.getMethod(options, client, "previewPrivateNames");
};
// Propose
exports.propose = (options, client) => {
    return exports.getMethod(options, client, "propose");
};
exports.getClient = (grpcEndPoint, grpc, protoLoader, protoService) => {
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
            oneofs: true,
        })
            .then((packageDefinition) => {
            const packageObject = grpc.loadPackageDefinition(packageDefinition);
            let client;
            if (protoService === "deployService") {
                client = new packageObject.casper.v1.DeployService(grpcEndPoint, grpc.credentials.createInsecure());
            }
            else {
                client = new packageObject.casper.v1.ProposeService(grpcEndPoint, grpc.credentials.createInsecure());
            }
            resolve(client);
        })
            .catch((err) => {
            reject(err);
        });
    });
};
exports.getGrpcProposeClient = (grpcEndPoint, grpc, protoLoader) => {
    return exports.getClient(grpcEndPoint, grpc, protoLoader, "proposeService");
};
