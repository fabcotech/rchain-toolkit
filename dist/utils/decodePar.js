"use strict";
exports.__esModule = true;
exports.decodePar = void 0;
var rnodeProtos = require("../rnode-protos");
var decodePar = function (par) {
    var a = rnodeProtos.Par.decode(par);
    return a.toJSON();
};
exports.decodePar = decodePar;
