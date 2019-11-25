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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var blakejs_1 = require("blakejs");
var elliptic = require("elliptic");
var js_sha3_1 = require("js-sha3");
var protobufjs_1 = require("protobufjs");
var rnodeProtos = require("./rnode-protos");
var base58 = require("./base58");
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
var rhoUnforgeablesToJs = function (unfs) {
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
var rholangMapToJsObject = function (expr) {
    var obj = {};
    expr.e_map_body.kvs.forEach(function (kv) {
        var k = kv.key.exprs[0].g_string;
        obj[k] = exports.rhoValToJs(kv.value);
    });
    return obj;
};
var rhoIdsToJs = function (ids) {
    return ids[0].id;
};
var rhoExprStringToJs = function (expr) {
    return expr.g_string;
};
var rhoExprUriToJs = function (expr) {
    return expr.g_uri;
};
var rhoExprBoolToJs = function (expr) {
    return expr.g_bool;
};
var rhoExprIntToJs = function (expr) {
    return expr.g_int;
};
var rhoExprListToJs = function (expr) {
    return expr.e_list_body.ps.map(function (e) { return exports.rhoValToJs(e); });
};
exports.rhoValToJs = function (val) {
    if (val.ids && val.ids[0]) {
        return rhoIdsToJs(val.ids);
    }
    else if (val.unforgeables && val.unforgeables[0]) {
        return rhoUnforgeablesToJs(val.unforgeables);
    }
    else if (val.exprs[0] && val.exprs[0].e_map_body) {
        return rholangMapToJsObject(val.exprs[0]);
    }
    else if (val.exprs[0] && val.exprs[0].g_string) {
        return rhoExprStringToJs(val.exprs[0]);
    }
    else if (val.exprs[0] && val.exprs[0].g_uri) {
        return rhoExprUriToJs(val.exprs[0]);
    }
    else if (val.exprs[0] && val.exprs[0].hasOwnProperty("g_bool")) {
        return rhoExprBoolToJs(val.exprs[0]);
    }
    else if (val.exprs[0] && val.exprs[0].g_int) {
        return rhoExprIntToJs(val.exprs[0]);
    }
    else if (val.exprs[0] && val.exprs[0].e_list_body) {
        return rhoExprListToJs(val.exprs[0]);
    }
    else {
        console.warn("Not implemented", val);
        return null;
    }
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
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = 0; }
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
        throw new Error("Failed to verify signature");
    }
    return new Uint8Array(derSign);
};
exports.transferRevTerm = function (a) {
    if (typeof a.from !== "string") {
        throw new Error("from must be a REV address");
    }
    if (typeof a.to !== "string") {
        throw new Error("to must be a REV address");
    }
    if (typeof a.amount !== "number") {
        throw new Error("amount must be a number");
    }
    return "new\n  rl(`rho:registry:lookup`),\n  RevVaultCh,\n  stdout(`rho:io:stdout`)\nin {\n\nrl!(`rho:rchain:revVault`, *RevVaultCh) |\nfor (@(_, RevVault) <- RevVaultCh) {\n\n  match (\n    \"" + a.from + "\",\n    \"" + a.to + "\",\n    " + a.amount + "\n  ) {\n    (from, to, amount) => {\n\n      new vaultCh, revVaultkeyCh, deployerId(`rho:rchain:deployerId`) in {\n        @RevVault!(\"findOrCreate\", from, *vaultCh) |\n        @RevVault!(\"deployerAuthKey\", *deployerId, *revVaultkeyCh) |\n        for (@(true, vault) <- vaultCh; key <- revVaultkeyCh) {\n\n          stdout!((\"Beginning transfer of \", amount, \"REV from\", from, \"to\", to)) |\n\n          new resultCh in {\n            @vault!(\"transfer\", to, amount, *key, *resultCh) |\n            for (@result <- resultCh) {\n              stdout!((\"Finished transfer of \", amount, \"REV to\", to, \"result was:\", result))\n            }\n          }\n        }\n      }\n    }\n  }\n}\n}";
};
exports.getDeployData = function (sigAlgorithm, timestamp, term, privateKey, publicKey, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = 0; }
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
    return __assign(__assign({}, payment), { deployer: Buffer.from(publicKey, "hex"), sig: signature, sigAlgorithm: sigAlgorithm });
};
// Address and public key
// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47
// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
var prefix = { coinId: "000000", version: "00" };
var toBase58 = function (hexStr) {
    var bytes = bytesFromHex(hexStr);
    return base58.encode(bytes);
};
var getAddrFromEth = function (ethAddr) {
    if (!ethAddr || ethAddr.length !== 40) {
        throw new Error("ETH address must contain 130 characters");
    }
    // Hash ETH address
    var ethAddrBytes = bytesFromHex(ethAddr);
    var ethHash = js_sha3_1.keccak256(ethAddrBytes);
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
    var pkHash = js_sha3_1.keccak256(pubKeyBytes.slice(1));
    // Take last 40 chars from hashed pk (ETH address)
    var pkHash40 = pkHash.slice(-40);
    // Return both REV and ETH address
    return getAddrFromEth(pkHash40);
};
