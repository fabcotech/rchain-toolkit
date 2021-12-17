"use strict";
exports.__esModule = true;
var keccak256 = require("keccak256");
var blakejs_1 = require("blakejs");
var base58 = require("../base58");
var ethAddressFromPublicKey_1 = require("./ethAddressFromPublicKey");
var bytesFromHex_1 = require("./bytesFromHex");
var toBase58 = function (hexStr) {
    var bytes = bytesFromHex_1.bytesFromHex(hexStr);
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
    var ethAddrBytes = bytesFromHex_1.bytesFromHex(ethAddr);
    var ethHash = keccak256(Buffer.from(ethAddrBytes)).toString("hex");
    // Add prefix with hash and calculate checksum (blake2b-256 hash)
    var payload = "" + prefix.coinId + prefix.version + ethHash;
    var payloadBytes = bytesFromHex_1.bytesFromHex(payload);
    var checksum = blakejs_1.blake2bHex(payloadBytes, void 666, 32).slice(0, 8);
    // Return REV address
    return toBase58("" + payload + checksum);
};
exports.revAddressFromPublicKey = function (publicKey) {
    var ethAddressWithoutPrefix = ethAddressFromPublicKey_1.ethAddressFromPublicKey(publicKey).slice(2);
    return getAddrFromEth(ethAddressWithoutPrefix);
};
