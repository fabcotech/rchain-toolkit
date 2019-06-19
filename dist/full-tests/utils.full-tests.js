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
var assert_1 = require("assert");
var utils_1 = require("../utils");
var models_mock_1 = require("../models/models.mock");
var deployDataToSignFromPayment;
var hashFromDeployDataToSign;
var testGetDeployDataToSign = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, utils_1.getDeployDataToSign(models_mock_1.payment)];
                case 1:
                    deployDataToSignFromPayment = _a.sent();
                    try {
                        assert_1.deepStrictEqual(Array.from(deployDataToSignFromPayment), Array.from(models_mock_1.deployDataToSign));
                    }
                    catch (err) {
                        console.log("  X utils.getDeployDataToSign");
                        reject(err);
                    }
                    console.log("  ✓ utils.getDeployDataToSign");
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
};
var testGetBlake2Hash = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            hashFromDeployDataToSign = utils_1.getBlake2Hash(deployDataToSignFromPayment);
            try {
                assert_1.deepStrictEqual(Array.from(hashFromDeployDataToSign), Array.from(models_mock_1.hash));
            }
            catch (err) {
                console.log("  X utils.getBlake2Hash");
                reject(err);
            }
            console.log("  ✓ utils.getBlake2Hash");
            resolve();
            return [2 /*return*/];
        });
    }); });
};
var testGetDeployDataEd2519 = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var deployDataFromPayment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, utils_1.getDeployData("ed25519", models_mock_1.payment.timestamp, models_mock_1.payment.term, models_mock_1.privateKey, models_mock_1.publicKey, models_mock_1.payment.phloPrice, models_mock_1.payment.phloLimit)];
                case 1:
                    deployDataFromPayment = _a.sent();
                    try {
                        assert_1.deepStrictEqual(deployDataFromPayment, __assign({}, models_mock_1.payment, { deployer: models_mock_1.deployDataEd25519.deployer, sig: models_mock_1.deployDataEd25519.sig, sigAlgorithm: models_mock_1.deployDataEd25519.sigAlgorithm }));
                    }
                    catch (err) {
                        console.log("  X utils.getDeployDataEd25519");
                        reject(err);
                    }
                    console.log("  ✓ utils.getDeployDataEd25519");
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
};
var testSignEd2519 = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var signatureEd25519;
        return __generator(this, function (_a) {
            try {
                signatureEd25519 = utils_1.signEd25519(hashFromDeployDataToSign, models_mock_1.privateKey);
                assert_1.deepStrictEqual(signatureEd25519, models_mock_1.deployDataEd25519.sig);
            }
            catch (err) {
                console.log("  X utils.signEd25519");
                reject(err);
            }
            console.log("  ✓ utils.signEd25519");
            resolve();
            return [2 /*return*/];
        });
    }); });
};
exports.testUtils = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    console.log("full tests running for utils.ts \n");
                    return [4 /*yield*/, testGetDeployDataToSign()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, testGetBlake2Hash()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, testGetDeployDataEd2519()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, testSignEd2519()];
                case 4:
                    _a.sent();
                    console.log("\n");
                    resolve();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    reject(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
};
