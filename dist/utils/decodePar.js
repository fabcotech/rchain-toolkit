"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePar = void 0;
const rnodeProtos = require("../rnode-protos");
exports.decodePar = (par) => {
    const a = rnodeProtos.Par.decode(par);
    return a.toJSON();
};
