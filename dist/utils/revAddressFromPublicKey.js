"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revAddressFromPublicKey = void 0;
const keccak256 = require("keccak256");
const blakejs_1 = require("blakejs");
const base58 = require("../base58");
const toBase58 = (hexStr) => {
    const bytes = bytesFromHex(hexStr);
    return base58.encode(bytes);
};
// Address and public key
// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47
// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
const prefix = { coinId: "000000", version: "00" };
const getAddrFromEth = (ethAddr) => {
    if (!ethAddr || ethAddr.length !== 40) {
        throw new Error("ETH address must contain 130 characters");
    }
    // Hash ETH address
    const ethAddrBytes = bytesFromHex(ethAddr);
    const ethHash = keccak256(Buffer.from(ethAddrBytes)).toString("hex");
    // Add prefix with hash and calculate checksum (blake2b-256 hash)
    const payload = `${prefix.coinId}${prefix.version}${ethHash}`;
    const payloadBytes = bytesFromHex(payload);
    const checksum = blakejs_1.blake2bHex(payloadBytes, void 666, 32).slice(0, 8);
    // Return REV address
    return toBase58(`${payload}${checksum}`);
};
const bytesFromHex = (hexStr) => {
    const byte2hex = ([arr, bhi], x) => bhi ? [[...arr, parseInt(`${bhi}${x}`, 16)]] : [arr, x];
    const [resArr] = Array.from(hexStr).reduce(byte2hex, [[]]);
    return Uint8Array.from(resArr);
};
exports.revAddressFromPublicKey = (publicKey) => {
    if (!publicKey || publicKey.length !== 130) {
        throw new Error("Public key must contain 130 characters");
    }
    // Public key bytes from hex string
    const pubKeyBytes = bytesFromHex(publicKey);
    // Remove one byte from pk bytes and hash
    const pkHash = keccak256(Buffer.from(pubKeyBytes.slice(1))).toString("hex");
    // Take last 40 chars from hashed pk (ETH address)
    const pkHash40 = pkHash.slice(-40);
    // Return both REV and ETH address
    return getAddrFromEth(pkHash40);
};
