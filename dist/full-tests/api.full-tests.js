"use strict";
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
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
var assert_1 = require("assert");
var models_mock_1 = require("../models/models.mock");
var decoders_1 = require("../decoders");
var api_1 = require("../api");
var api_mock_1 = require("../models/api.mock");
var utils_1 = require("../utils");
var testPreviewPrivateNames = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            protoLoader
                .load("./dist/protobuf/DeployService.proto", {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            })
                .then(function (packageDefinition) {
                var packageObject = grpc.loadPackageDefinition(packageDefinition);
                var client = new packageObject.coop.rchain.casper.protocol.DeployService("localhost:40401", grpc.credentials.createInsecure());
                api_1.previewPrivateNames({
                    user: Buffer.from(models_mock_1.publicKey, "hex"),
                    timestamp: models_mock_1.payment.timestamp,
                    nameQty: 1
                }, client)
                    .then(function (either) { return __awaiter(_this, void 0, void 0, function () {
                    var privateNamesFromNode, err_1, privateNameFromNode;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                try {
                                    assert_1.deepStrictEqual(either, api_mock_1.privateNamePreviewResponse);
                                    console.log("  ✓ api.previewPrivateNames");
                                }
                                catch (err) {
                                    console.log("  X api.previewPrivateNames");
                                    reject(err);
                                }
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, decoders_1.parseEitherPrivateNamePreview(either)];
                            case 2:
                                privateNamesFromNode = _a.sent();
                                assert_1.deepStrictEqual(privateNamesFromNode.ids, api_mock_1.privateNames.ids);
                                console.log("  ✓ decoders.parseEitherPrivateNamePreview");
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                console.log("  X decoders.parseEitherPrivateNamePreview");
                                reject(err_1);
                                return [3 /*break*/, 4];
                            case 4:
                                try {
                                    privateNameFromNode = utils_1.unforgeableWithId(privateNamesFromNode.ids[0]);
                                    assert_1.deepStrictEqual(privateNameFromNode, models_mock_1.privateName);
                                    console.log("  ✓ utils.unforgeableWithId");
                                }
                                catch (err) {
                                    console.log("  X utils.unforgeableWithId");
                                    reject(err);
                                }
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); })["catch"](function (err) {
                    reject(err);
                });
            });
            return [2 /*return*/];
        });
    }); });
};
var testDoDeploy = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            protoLoader
                .load("./dist/protobuf/DeployService.proto", {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            })
                .then(function (packageDefinition) {
                var packageObject = grpc.loadPackageDefinition(packageDefinition);
                var client = new packageObject.coop.rchain.casper.protocol.DeployService("localhost:40401", grpc.credentials.createInsecure());
                api_1.doDeploy(models_mock_1.deployDataEd25519, client)
                    .then(function (either) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        try {
                            assert_1.deepStrictEqual(either, api_mock_1.doDeployEd25519Response);
                            console.log("  ✓ api.doDeploy");
                        }
                        catch (err) {
                            console.log("  X api.doDeploy");
                            reject(err);
                        }
                        resolve();
                        return [2 /*return*/];
                    });
                }); })["catch"](function (err) {
                    reject(err);
                });
            });
            return [2 /*return*/];
        });
    }); });
};
var testCreateBlock = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            protoLoader
                .load("./dist/protobuf/DeployService.proto", {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            })
                .then(function (packageDefinition) {
                var packageObject = grpc.loadPackageDefinition(packageDefinition);
                var client = new packageObject.coop.rchain.casper.protocol.DeployService("localhost:40401", grpc.credentials.createInsecure());
                api_1.doDeploy(models_mock_1.deployDataEd25519, client)
                    .then(function (either) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        try {
                            assert_1.deepStrictEqual(either, api_mock_1.doDeployEd25519Response);
                            console.log("  ✓ api.doDeploy");
                        }
                        catch (err) {
                            console.log("  X api.doDeploy");
                            reject(err);
                        }
                        resolve();
                        return [2 /*return*/];
                    });
                }); })["catch"](function (err) {
                    reject(err);
                });
            });
            return [2 /*return*/];
        });
    }); });
};
exports.testApi = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log("full tests running for api.ts and decoders.ts \n");
                    return [4 /*yield*/, testPreviewPrivateNames()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, testDoDeploy()];
                case 2:
                    _a.sent();
                    console.log("\n");
                    resolve();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    reject(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
