"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var elliptic = require("elliptic");
var rnodeProtos = require("./rnode-protos");
var getDeployData_1 = require("./utils/getDeployData");
var getDeployDataToSign_1 = require("./utils/getDeployDataToSign");
var getBlake2Hash_1 = require("./utils/getBlake2Hash");
__export(require("./utils/rhoValToJs"));
__export(require("./utils/rhoExprToVar"));
__export(require("./utils/decodePar"));
__export(require("./utils/getBlake2Hash"));
__export(require("./utils/getDeployData"));
__export(require("./utils/getDeployDataToSign"));
__export(require("./utils/revAddressFromPublicKey"));
__export(require("./utils/ethAddressFromPublicKey"));
exports.getFirstBlock = function (blockInfo) {
    return blockInfo[0];
};
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
exports.unforgeableWithId = function (id) {
    return id.toString("hex");
};
var stringToRhoRepr = function (a) {
    return { g_string: a };
};
var intToRhoRepr = function (a) {
    return { g_int: a };
};
var boolToRhoRepr = function (a) {
    return { g_bool: a };
};
var listToRhoRepr = function (a) {
    return {
        ps: a.map(function (e) { return ({ exprs: [exports.varToRhoExpr(e)] }); })
    };
};
exports.mapToRhoRepr = function (a) {
    var map = {
        kvs: []
    };
    Object.keys(a)
        .sort() // alphabetical
        .forEach(function (key) {
        if (typeof a[key] !== "undefined" && a[key] !== null) {
            map.kvs.push({
                key: { exprs: [exports.varToRhoExpr(key)] },
                value: { exprs: [exports.varToRhoExpr(a[key])] }
            });
        }
        else {
            map.kvs.push({
                key: { exprs: [exports.varToRhoExpr(key)] }
            });
        }
    });
    return map;
};
exports.varToRhoExpr = function (a) {
    if (typeof a === "boolean") {
        return boolToRhoRepr(a);
    }
    if (typeof a === "string") {
        return stringToRhoRepr(a);
    }
    if (typeof a === "number") {
        return intToRhoRepr(a);
    }
    if (Array.isArray(a)) {
        return { e_list_body: listToRhoRepr(a) };
    }
    if (typeof a === "object" && a !== null) {
        return { e_map_body: exports.mapToRhoRepr(a) };
    }
    throw new Error("Unknown variable type");
};
exports.toByteArray = function (a) {
    var expr = exports.varToRhoExpr(a);
    return rnodeProtos.Par.encode({
        exprs: [expr]
    }).finish();
};
exports.verifyPrivateAndPublicKey = function (privateKey, publicKey) {
    var ec = new elliptic.ec("secp256k1");
    var keyPair = ec.keyFromPrivate(privateKey);
    if (keyPair.getPublic().encode("hex", false) !== publicKey) {
        throw new Error("Private key and public key do not match");
    }
};
exports.signSecp256k1 = function (hash, privateKey) {
    var ec = new elliptic.ec("secp256k1");
    var keyPair = ec.keyFromPrivate(privateKey);
    var signature = keyPair.sign((Buffer || Buffer).from(hash), {
        canonical: true
    });
    var derSign = signature.toDER();
    if (!ec.verify(Buffer.from(hash), signature, keyPair, "hex")) {
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
exports.getDeployOptions = function (sigAlgorithm, timestamp, term, privateKey, publicKey, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = -1; }
    var deployData = getDeployData_1.getDeployData(timestamp, term, phloPrice, phloLimit, validAfterBlockNumber || -1);
    var toSign = getDeployDataToSign_1.getDeployDataToSign(deployData);
    var hash = getBlake2Hash_1.getBlake2Hash(toSign);
    var signature;
    signature = exports.signSecp256k1(hash, privateKey);
    return {
        data: deployData,
        deployer: publicKey,
        signature: Buffer.from(new Uint8Array(signature)).toString("hex"),
        sigAlgorithm: sigAlgorithm
    };
};
// Address and public key
// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47
exports.publicKeyFromPrivateKey = function (privateKey) {
    var ec = new elliptic.ec("secp256k1");
    var keyPair = ec.keyFromPrivate(privateKey);
    return keyPair.getPublic().encode("hex", false);
};
