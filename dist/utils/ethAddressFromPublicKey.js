"use strict";
exports.__esModule = true;
exports.ethAddressFromPublicKey = void 0;
var keccak256 = require("keccak256");
var bytesFromHex_1 = require("./bytesFromHex");
var ethAddressFromPublicKey = function (publicKey) {
    if (!publicKey || publicKey.length !== 130) {
        throw new Error("Public key must contain 130 characters");
    }
    var pubKeyBytes = (0, bytesFromHex_1.bytesFromHex)(publicKey);
    var pkHash = keccak256(Buffer.from(pubKeyBytes.slice(1))).toString("hex");
    return "0x".concat(pkHash.slice(-40).toLowerCase());
};
exports.ethAddressFromPublicKey = ethAddressFromPublicKey;
