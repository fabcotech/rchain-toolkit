"use strict";
exports.__esModule = true;
var rnodeProtos = require("../rnode-protos");
exports.decodePar = function (par) {
    var a = rnodeProtos.Par.decode(par);
    return a.toJSON();
};
