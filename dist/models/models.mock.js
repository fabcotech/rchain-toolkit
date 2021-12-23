"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.privateKey = "81f1f1b3eaa563dcaf928ee5d9aefd80fdd7300d777d3538eb10b9b10089dc65";
exports.publicKey = "043262dd06cca940aaf306084d99eae00db225091340fc9343aa4652cf38a051a673aa3d3499dd11cf67448a5a791cc8a12fda3378e5cd9c73880065aa1aedbcf8";
// Payment
var timestamp = 1560802892221;
var term = "new hello in { hello!(\"world\") }";
var phloLimit = 1000000;
var phloPrice = 1;
var validAfterBlockNumber = 0;
exports.deployData = {
    timestamp: timestamp,
    term: term,
    phloLimit: phloLimit,
    phloPrice: phloPrice,
    validAfterBlockNumber: validAfterBlockNumber
};
exports.deployDataToSign = new Uint8Array([
    18, 32, 110, 101, 119, 32, 104, 101, 108,
    108, 111, 32, 105, 110, 32, 123, 32, 104,
    101, 108, 108, 111, 33, 40, 34, 119, 111,
    114, 108, 100, 34, 41, 32, 125, 24, 189,
    179, 232, 184, 182, 45, 56, 1, 64, 192,
    132, 61
]);
exports.hash = new Uint8Array([
    85, 165, 29, 145, 1, 97, 134, 140,
    9, 26, 10, 68, 52, 218, 4, 153,
    151, 142, 4, 202, 96, 142, 234, 246,
    13, 216, 139, 192, 145, 2, 182, 52
]);
exports.deployDataSecp256k1 = __assign(__assign({}, exports.deployData), { deployer: Buffer.from(new Uint8Array([
        4,
        50,
        98,
        221,
        6,
        204,
        169,
        64,
        170,
        243,
        6,
        8,
        77,
        153,
        234,
        224,
        13,
        178,
        37,
        9,
        19,
        64,
        252,
        147,
        67,
        170,
        70,
        82,
        207,
        56,
        160,
        81,
        166,
        115,
        170,
        61,
        52,
        153,
        221,
        17,
        207,
        103,
        68,
        138,
        90,
        121,
        28,
        200,
        161,
        47,
        218,
        51,
        120,
        229,
        205,
        156,
        115,
        136,
        0,
        101,
        170,
        26,
        237,
        188,
        248
    ])), sig: new Uint8Array([
        48, 69, 2, 33, 0, 213, 182, 103, 13, 179, 169,
        16, 251, 199, 168, 147, 76, 17, 219, 117, 161, 78,
        236, 33, 218, 231, 220, 93, 108, 216, 224, 52, 108,
        131, 242, 2, 233, 2, 32, 59, 100, 251, 110, 180,
        213, 29, 114, 225, 168, 195, 33, 43, 139, 237, 63,
        89, 151, 229, 159, 234, 126, 212, 133, 38, 178, 174,
        182, 48, 154, 214, 70
    ]), sigAlgorithm: "secp256k1", validAfterBlockNumber: 0 });
exports.privateName = "fc60308a5512c265b978b46d7283f2d5f7aa12f64a5b1874df26ef3be827f57e";
