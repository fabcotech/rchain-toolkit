"use strict";
exports.__esModule = true;
var rnodeProtos = require("../rnode-protos");
exports.getDeployDataToSign = function (payment) {
    return rnodeProtos.casper.DeployDataProto.encode(payment).finish();
};
