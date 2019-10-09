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
var blakejs_1 = require("blakejs");
var elliptic = require("elliptic");
var protobufjs_1 = require("protobufjs");
var rnodeProtos = require("./rnode-protos");
var ec = new elliptic.ec("secp256k1");
exports.getValueFromBlocks = function (blockInfo) {
    for (var i = 0; i < blockInfo.length; i += 1) {
        var block = blockInfo[i];
        if (block.postBlockData) {
            for (var j = 0; j < block.postBlockData.length; j += 1) {
                var data = block.postBlockData[j];
                if (data) {
                    return data;
                }
            }
        }
    }
    throw new Error("Not data found in any block");
};
var rholangUnforgeablesToJs = function (unfs) {
    var unforgeables = [];
    unfs.forEach(function (u) {
        var x = {};
        if (u.g_private_body) {
            x.gPrivate = Buffer.from(u.g_private_body.id).toString("hex");
        }
        else if (u.g_deploy_id_body) {
            x.gDeployId = Buffer.from(u.g_deploy_id_body.id).toString("hex");
        }
        else if (u.g_deployer_id_body) {
            x.gDeployerId = Buffer.from(u.g_deployer_id_body.id).toString("hex");
        }
        unforgeables.push(x);
    });
    return unforgeables;
};
exports.rholangMapToJsObject = function (map) {
    var obj = {};
    map.kvs.forEach(function (kv) {
        var k = kv.key.exprs[0].g_string;
        var val = kv.value;
        if (val.ids && val.ids[0]) {
            obj[k] = val.ids[0].id;
        }
        else if (val.exprs && val.exprs[0]) {
            if (val.exprs[0].g_string) {
                obj[k] = val.exprs[0].g_string;
            }
            else if (val.exprs[0].g_uri) {
                obj[k] = val.exprs[0].g_uri;
            }
            else if (val.exprs[0].hasOwnProperty("g_bool")) {
                obj[k] = val.exprs[0].g_bool;
            }
            else if (val.exprs[0].g_int) {
                obj[k] = val.exprs[0].g_int;
            }
            else if (val.exprs[0].e_map_body) {
                obj[k] = exports.rholangMapToJsObject(val.exprs[0].e_map_body);
            }
            else {
                console.warn("Not implemented", val);
            }
        }
        else if (val.unforgeables && val.unforgeables[0]) {
            var unfs = rholangUnforgeablesToJs(val.unforgeables);
            obj[k] = unfs;
        }
        else {
            console.warn("Not implemented", val);
        }
    });
    return obj;
};
exports.unforgeableWithId = function (id) {
    var bytes = protobufjs_1.Writer.create()
        .bytes(id)
        .finish()
        .slice(1);
    return Buffer.from(bytes).toString("hex");
};
exports.getPayment = function (timestamp, term, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = -1; }
    return {
        timestamp: timestamp,
        term: term,
        phloLimit: phloLimit,
        phloPrice: phloPrice,
        validAfterBlockNumber: validAfterBlockNumber
    };
};
exports.getDeployDataToSign = function (payment) {
    return rnodeProtos.casper.DeployDataProto.encode(payment).finish();
};
exports.getBlake2Hash = function (toHash) {
    var context = blakejs_1.blake2bInit(32, null);
    blakejs_1.blake2bUpdate(context, toHash);
    return blakejs_1.blake2bFinal(context);
};
exports.verifyPrivateAndPublicKey = function (privateKey, publicKey) {
    var keyPair = ec.keyFromPrivate(privateKey);
    if (keyPair.getPublic().encode("hex") !== publicKey) {
        throw new Error("Private key and public key do not match");
    }
};
exports.signSecp256k1 = function (hash, privateKey) {
    var keyPair = ec.keyFromPrivate(privateKey);
    var signature = keyPair.sign(Buffer.from(hash), { canonical: true });
    var derSign = signature.toDER();
    if (!ec.verify(Buffer.from(hash), Buffer.from(derSign), keyPair.getPublic().encode("hex"), "hex")) {
        throw new Error("Signature verification failed");
    }
    return new Uint8Array(derSign);
};
exports.getDeployData = function (sigAlgorithm, timestamp, term, privateKey, publicKey, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = -1; }
    var payment = exports.getPayment(timestamp, term, phloPrice, phloLimit, validAfterBlockNumber);
    var toSign = exports.getDeployDataToSign(payment);
    var hash = exports.getBlake2Hash(toSign);
    var signature;
    if (sigAlgorithm === "ed25519") {
        throw new Error("Unsupported algorithm ed25519; please use secp256k1");
    }
    else if (sigAlgorithm === "secp256k1") {
        signature = exports.signSecp256k1(hash, privateKey);
    }
    else {
        throw new Error("Unsupported algorithm");
    }
    return __assign({}, payment, { deployer: Buffer.from(publicKey, "hex"), sig: signature, sigAlgorithm: sigAlgorithm });
};
