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
var decoders_1 = require("./decoders");
exports.listenForDataAtName = function (options, client, parseEither) {
    if (parseEither === void 0) { parseEither = true; }
    return new Promise(function (resolve, reject) {
        client.listenForDataAtName(options, function (err, resp) { return __awaiter(_this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!err) return [3 /*break*/, 1];
                        reject(err);
                        return [3 /*break*/, 7];
                    case 1:
                        if (!parseEither) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, decoders_1.parseEitherListeningNameData(resp)];
                    case 3:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        resolve(resp);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    });
};
exports.doDeploy = function (deployData, client, parseEither) {
    if (parseEither === void 0) { parseEither = true; }
    return new Promise(function (resolve, reject) {
        client.DoDeploy(deployData, function (err, resp) { return __awaiter(_this, void 0, void 0, function () {
            var result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!err) return [3 /*break*/, 1];
                        reject(err);
                        return [3 /*break*/, 7];
                    case 1:
                        if (!parseEither) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, decoders_1.parseEitherDoDeploy(resp)];
                    case 3:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        reject(err_2);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        resolve(resp);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    });
};
exports.previewPrivateNames = function (options, client, parseEither) {
    if (parseEither === void 0) { parseEither = true; }
    return new Promise(function (resolve, reject) {
        client.previewPrivateNames(options, function (err, resp) { return __awaiter(_this, void 0, void 0, function () {
            var result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!err) return [3 /*break*/, 1];
                        reject(err);
                        return [3 /*break*/, 7];
                    case 1:
                        if (!parseEither) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, decoders_1.parseEitherPrivateNamePreview(resp)];
                    case 3:
                        result = _a.sent();
                        resolve(result);
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _a.sent();
                        reject(err_3);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        resolve(resp);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    });
};
exports.createBlock = function (options, client) {
    return new Promise(function (resolve, reject) {
        client.createBlock(options, function (err, resp) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(resp);
                }
                return [2 /*return*/];
            });
        }); });
    });
};
exports.getGrpcClient = function (grpcEndPoint, grpc, protoLoader) {
    return new Promise(function (resolve, reject) {
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
            var client = new packageObject.coop.rchain.casper.protocol.DeployService(grpcEndPoint, grpc.credentials.createInsecure());
            resolve(client);
        })["catch"](function (err) {
            reject(err);
        });
    });
};
