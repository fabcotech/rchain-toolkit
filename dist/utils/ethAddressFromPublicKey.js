"use strict";
exports.__esModule = true;
var keccak256 = require("keccak256");
var bytesFromHex_1 = require("./bytesFromHex");
exports.ethAddressFromPublicKey = function (publicKey) {
    if (!publicKey || publicKey.length !== 130) {
        throw new Error("Public key must contain 130 characters");
    }
    var pubKeyBytes = bytesFromHex_1.bytesFromHex(publicKey);
    var pkHash = keccak256(Buffer.from(pubKeyBytes.slice(1))).toString("hex");
    return "0x" + pkHash.slice(-40).toLowerCase();
};
