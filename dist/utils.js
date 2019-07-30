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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var blakejs_1 = require("blakejs");
var elliptic = require("elliptic");
var protobufjs_1 = require("protobufjs");
var protobufjs_2 = require("protobufjs");
var rhoTypes = require("./pbjs/RhoTypes");
var ec = new elliptic.ec("secp256k1");
exports.getValueFromBlocks = function (blockResults) {
    for (var i = 0; i < blockResults.length; i += 1) {
        var block = blockResults[i];
        for (var j = 0; j < block.postBlockData.length; j += 1) {
            var data = block.postBlockData[j];
            if (data) {
                return data;
            }
        }
    }
    throw new Error("Not data found in any block");
};
var rholangUnforgeablesToJs = function (unfs) {
    var unforgeables = [];
    unfs.forEach(function (u) {
        var x = {};
        var encoded = rhoTypes.GUnforgeable.encode(u);
        var decoded = rhoTypes.GUnforgeable.decode(encoded.finish());
        if (decoded.gPrivateBody) {
            x.gPrivate = Buffer.from(decoded.gPrivateBody.id).toString("hex");
        }
        else if (decoded.gDeployIdBody) {
            x.gDeployId = Buffer.from(decoded.gDeployIdBody.id).toString("hex");
        }
        else if (decoded.gDeployerIdBody) {
            x.gDeployerId = Buffer.from(decoded.gDeployerIdBody.id).toString("hex");
        }
        unforgeables.push(x);
    });
    return unforgeables;
};
exports.rholangMapToJsObject = function (map) {
    var obj = {};
    map.kvs.forEach(function (kv) {
        var k = kv.key.exprs[0].gString;
        var val = kv.value;
        if (val.ids && val.ids[0]) {
            obj[k] = val.ids[0].id;
        }
        else if (val.exprs && val.exprs[0]) {
            if (val.exprs[0].gString) {
                obj[k] = val.exprs[0].gString;
            }
            else if (val.exprs[0].gUri) {
                obj[k] = val.exprs[0].gUri;
            }
            else if (val.exprs[0].hasOwnProperty("gBool")) {
                obj[k] = val.exprs[0].gBool;
            }
            else if (val.exprs[0].gInt) {
                obj[k] = val.exprs[0].gInt;
            }
            else if (val.exprs[0].eMapBody) {
                obj[k] = exports.rholangMapToJsObject(val.exprs[0].eMapBody);
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
    return new Promise(function (resolve, reject) {
        protobufjs_2.load(__dirname + "/protobuf/DeployService.proto", function (err, root) {
            if (err || !root) {
                reject(err);
                return;
            }
            var DeployDataType = root.lookupType("DeployData");
            var b = DeployDataType.encode(payment).finish();
            resolve(b);
        });
    });
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
    var signature = keyPair.sign(Buffer.from(hash));
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
    return __awaiter(_this, void 0, void 0, function () {
        var payment, toSign, hash, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payment = exports.getPayment(timestamp, term, phloPrice, phloLimit, validAfterBlockNumber);
                    return [4 /*yield*/, exports.getDeployDataToSign(payment)];
                case 1:
                    toSign = _a.sent();
                    hash = exports.getBlake2Hash(toSign);
                    if (sigAlgorithm === "ed25519") {
                        throw new Error("Unsupported algorithm ed25519; please use secp256k1");
                    }
                    else if (sigAlgorithm === "secp256k1") {
                        signature = exports.signSecp256k1(hash, privateKey);
                    }
                    else {
                        throw new Error("Unsupported algorithm");
                    }
                    return [2 /*return*/, __assign({}, payment, { deployer: Buffer.from(publicKey, "hex"), sig: signature, sigAlgorithm: sigAlgorithm })];
            }
        });
    });
};
