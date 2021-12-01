"use strict";
exports.__esModule = true;
var blakejs_1 = require("blakejs");
exports.getBlake2Hash = function (toHash, length) {
    if (length === void 0) { length = 32; }
    var context = blakejs_1.blake2bInit(length, null);
    blakejs_1.blake2bUpdate(context, toHash);
    return blakejs_1.blake2bFinal(context);
};
