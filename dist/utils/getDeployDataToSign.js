"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rnodeProtos = require("../rnode-protos");
exports.getDeployDataToSign = (payment) => {
    return rnodeProtos.casper.DeployDataProto.encode(payment).finish();
};
