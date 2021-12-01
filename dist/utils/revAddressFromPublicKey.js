"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var keccak256 = require("keccak256");
var blakejs_1 = require("blakejs");
var base58 = require("../base58");
var toBase58 = function (hexStr) {
    var bytes = bytesFromHex(hexStr);
    return base58.encode(bytes);
};
// Address and public key
// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47
// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
var prefix = { coinId: "000000", version: "00" };
var getAddrFromEth = function (ethAddr) {
    if (!ethAddr || ethAddr.length !== 40) {
        throw new Error("ETH address must contain 130 characters");
    }
    // Hash ETH address
    var ethAddrBytes = bytesFromHex(ethAddr);
    var ethHash = keccak256(Buffer.from(ethAddrBytes)).toString("hex");
    // Add prefix with hash and calculate checksum (blake2b-256 hash)
    var payload = "" + prefix.coinId + prefix.version + ethHash;
    var payloadBytes = bytesFromHex(payload);
    var checksum = blakejs_1.blake2bHex(payloadBytes, void 666, 32).slice(0, 8);
    // Return REV address
    return toBase58("" + payload + checksum);
};
var bytesFromHex = function (hexStr) {
    var byte2hex = function (_a, x) {
        var arr = _a[0], bhi = _a[1];
        return bhi ? [__spreadArrays(arr, [parseInt("" + bhi + x, 16)])] : [arr, x];
    };
    var resArr = Array.from(hexStr).reduce(byte2hex, [[]])[0];
    return Uint8Array.from(resArr);
};
exports.revAddressFromPublicKey = function (publicKey) {
    if (!publicKey || publicKey.length !== 130) {
        throw new Error("Public key must contain 130 characters");
    }
    // Public key bytes from hex string
    var pubKeyBytes = bytesFromHex(publicKey);
    // Remove one byte from pk bytes and hash
    var pkHash = keccak256(Buffer.from(pubKeyBytes.slice(1))).toString("hex");
    // Take last 40 chars from hashed pk (ETH address)
    var pkHash40 = pkHash.slice(-40);
    // Return both REV and ETH address
    return getAddrFromEth(pkHash40);
};
