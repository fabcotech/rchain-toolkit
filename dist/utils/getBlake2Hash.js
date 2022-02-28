"use strict";
exports.__esModule = true;
exports.getBlake2Hash = void 0;
var blakejs_1 = require("blakejs");
var getBlake2Hash = function (toHash, length) {
    if (length === void 0) { length = 32; }
    var context = (0, blakejs_1.blake2bInit)(length, null);
    (0, blakejs_1.blake2bUpdate)(context, toHash);
    return (0, blakejs_1.blake2bFinal)(context);
};
exports.getBlake2Hash = getBlake2Hash;
