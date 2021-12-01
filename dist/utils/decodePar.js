"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rnodeProtos = require("../rnode-protos");
exports.decodePar = (par) => {
    const a = rnodeProtos.Par.decode(par);
    return a.toJSON();
};
