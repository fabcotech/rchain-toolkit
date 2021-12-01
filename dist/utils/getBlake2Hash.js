"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blakejs_1 = require("blakejs");
exports.getBlake2Hash = (toHash, length = 32) => {
    const context = blakejs_1.blake2bInit(length, null);
    blakejs_1.blake2bUpdate(context, toHash);
    return blakejs_1.blake2bFinal(context);
};
