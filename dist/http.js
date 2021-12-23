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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
var utils_1 = require("./utils");
var http = require("http");
var https = require("https");
var validateUrl = function (options) {
    if (options.url.startsWith("http://")) {
        return {
            protocol: "http",
            lib: http,
            options: {
                host: options.url.substr(7).split(":")[0],
                port: options.url.substr(7).split(":")[1]
            }
        };
    }
    else if (options.url.startsWith("https://")) {
        return {
            protocol: "https",
            lib: https,
            options: {
                host: options.url.substr(8).split(":")[0],
                port: options.url.substr(8).split(":")[1],
                rejectUnauthorized: options.rejectUnauthorized,
                cert: options.cert,
                ca: options.ca
            }
        };
    }
    else {
        throw new Error("URL most be http://ip_or_domain:port or https://ip_or_domain:port");
    }
};
exports.deploy = function (urlOrOptions, options, timeout) {
    if (timeout === void 0) { timeout = undefined; }
    return __awaiter(void 0, void 0, void 0, function () {
        var urlValidated, uv, pd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof urlOrOptions === "string") {
                        urlValidated = validateUrl({ url: urlOrOptions });
                    }
                    else {
                        urlValidated = validateUrl(urlOrOptions);
                    }
                    uv = urlValidated;
                    pd = undefined;
                    if (!(typeof timeout === "number")) return [3 /*break*/, 2];
                    return [4 /*yield*/, exports.prepareDeploy(urlOrOptions, {
                            deployer: options.deployer,
                            timestamp: options.data.timestamp,
                            nameQty: 1
                        })];
                case 1:
                    pd = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                        var req = uv.lib.request(__assign(__assign(__assign(__assign({ headers: {
                                "Content-Type": "application/json"
                            }, method: "POST", path: "/api/deploy", host: uv.options.host }, (uv.options.port ? { port: uv.options.port } : {})), (uv.options.cert ? { cert: uv.options.port } : {})), (uv.options.rejectUnauthorized
                            ? { port: uv.options.rejectUnauthorized }
                            : {})), (uv.options.ca ? { port: uv.options.ca } : {})), function (res) {
                            var data = "";
                            res.on("data", function (chunk) {
                                data += chunk;
                                res.on("end", function () {
                                    if (!data.toString('utf8').startsWith('"Success!')) {
                                        throw new Error(data.toString('utf8'));
                                    }
                                    if (typeof timeout === "number") {
                                        var s_1 = new Date().getTime();
                                        var ongoning_1 = false;
                                        var interval_1 = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var dan;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (ongoning_1) {
                                                            return [2 /*return*/];
                                                        }
                                                        ongoning_1 = true;
                                                        if (new Date().getTime() - timeout > s_1) {
                                                            clearInterval(interval_1);
                                                            throw new Error("TIMEOUT");
                                                        }
                                                        return [4 /*yield*/, exports.dataAtName(urlOrOptions, {
                                                                name: {
                                                                    UnforgPrivate: { data: JSON.parse(pd).names[0] }
                                                                },
                                                                depth: 3
                                                            })];
                                                    case 1:
                                                        dan = _a.sent();
                                                        if (dan &&
                                                            JSON.parse(dan) &&
                                                            JSON.parse(dan).exprs &&
                                                            JSON.parse(dan).exprs.length) {
                                                            resolve(dan);
                                                            clearInterval(interval_1);
                                                        }
                                                        ongoning_1 = false;
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 4000);
                                    }
                                    else {
                                        resolve(data);
                                    }
                                });
                            });
                        });
                        req.write(JSON.stringify(options));
                        req.end();
                        req.on("error", function (e) {
                            reject(e);
                        });
                    })];
            }
        });
    });
};
exports.easyDeploy = function (urlOrOptions, term, privateKey, phloPrice, phloLimit, timeout) {
    if (timeout === void 0) { timeout = undefined; }
    return __awaiter(void 0, void 0, void 0, function () {
        var urlValidated, uv, publicKey, vab, d, options, pd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof urlOrOptions === "string") {
                        urlValidated = validateUrl({ url: urlOrOptions });
                    }
                    else {
                        urlValidated = validateUrl(urlOrOptions);
                    }
                    uv = urlValidated;
                    publicKey = utils_1.publicKeyFromPrivateKey(privateKey);
                    return [4 /*yield*/, exports.validAfterBlockNumber(urlOrOptions)];
                case 1:
                    vab = _a.sent();
                    d = new Date().valueOf();
                    options = utils_1.getDeployOptions("secp256k1", d, term, privateKey, publicKey, phloPrice, phloLimit, vab);
                    pd = undefined;
                    if (!(typeof timeout === "number")) return [3 /*break*/, 3];
                    return [4 /*yield*/, exports.prepareDeploy(urlOrOptions, {
                            deployer: publicKey,
                            timestamp: d,
                            nameQty: 1
                        })];
                case 2:
                    pd = _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, new Promise(function (resolve, reject) {
                        var req = uv.lib.request(__assign(__assign(__assign(__assign({ headers: {
                                "Content-Type": "application/json"
                            }, method: "POST", path: "/api/deploy", host: uv.options.host }, (uv.options.port ? { port: uv.options.port } : {})), (uv.options.cert ? { cert: uv.options.port } : {})), (uv.options.rejectUnauthorized
                            ? { port: uv.options.rejectUnauthorized }
                            : {})), (uv.options.ca ? { port: uv.options.ca } : {})), function (res) {
                            var data = "";
                            res.on("data", function (chunk) {
                                data += chunk;
                                res.on("end", function () {
                                    if (!data.toString('utf8').startsWith('"Success!')) {
                                        throw new Error(data.toString('utf8'));
                                    }
                                    if (typeof timeout === "number") {
                                        var s_2 = new Date().getTime();
                                        var ongoning_2 = false;
                                        var interval_2 = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
                                            var dan;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (ongoning_2) {
                                                            return [2 /*return*/];
                                                        }
                                                        ongoning_2 = true;
                                                        if (new Date().getTime() - timeout > s_2) {
                                                            clearInterval(interval_2);
                                                            throw new Error("TIMEOUT");
                                                        }
                                                        return [4 /*yield*/, exports.dataAtName(urlOrOptions, {
                                                                name: {
                                                                    UnforgPrivate: { data: JSON.parse(pd).names[0] }
                                                                },
                                                                depth: 3
                                                            })];
                                                    case 1:
                                                        dan = _a.sent();
                                                        if (dan &&
                                                            JSON.parse(dan) &&
                                                            JSON.parse(dan).exprs &&
                                                            JSON.parse(dan).exprs.length) {
                                                            resolve(dan);
                                                            clearInterval(interval_2);
                                                        }
                                                        ongoning_2 = false;
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 4000);
                                    }
                                    else {
                                        resolve(data);
                                    }
                                });
                            });
                        });
                        req.write(JSON.stringify(options));
                        req.end();
                        req.on("error", function (e) {
                            reject(e);
                        });
                    })];
            }
        });
    });
};
// ==============
// Valid after block number
// ==============
exports.validAfterBlockNumber = function (urlOrOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var validAfterBlockNumberResponse, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = JSON).parse;
                return [4 /*yield*/, exports.blocks(urlOrOptions, {
                        position: 1
                    })];
            case 1:
                validAfterBlockNumberResponse = _b.apply(_a, [_c.sent()])[0].blockNumber;
                return [2 /*return*/, validAfterBlockNumberResponse];
        }
    });
}); };
exports.exploreDeploy = function (urlOrOptions, options) {
    var urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    var uv = urlValidated;
    return new Promise(function (resolve, reject) {
        var req = uv.lib.request(__assign(__assign(__assign(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/explore-deploy", host: uv.options.host }, (uv.options.port ? { port: uv.options.port } : {})), (uv.options.cert ? { cert: uv.options.cert } : {})), (uv.options.rejectUnauthorized
            ? { rejectUnauthorized: uv.options.rejectUnauthorized }
            : {})), (uv.options.ca ? { ca: uv.options.ca } : {})), function (res) {
            var data = "";
            res.on("data", function (chunk) {
                data += chunk;
                res.on("end", function () {
                    resolve(data);
                });
            });
        });
        req.write(options.term);
        req.end();
        req.on("error", function (e) {
            reject(e);
        });
    });
};
exports.blocks = function (urlOrOptions, options) {
    return new Promise(function (resolve, reject) {
        var urlValidated;
        if (typeof urlOrOptions === "string") {
            urlValidated = validateUrl({ url: urlOrOptions });
        }
        else {
            urlValidated = validateUrl(urlOrOptions);
        }
        var uv = urlValidated;
        var req = urlValidated.lib.request(__assign(__assign(__assign(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "GET", path: "/api/blocks/" + options.position, host: uv.options.host }, (uv.options.port ? { port: uv.options.port } : {})), (uv.options.cert ? { cert: uv.options.cert } : {})), (uv.options.rejectUnauthorized
            ? { rejectUnauthorized: uv.options.rejectUnauthorized }
            : {})), (uv.options.ca ? { ca: uv.options.ca } : {})), function (res) {
            var data = "";
            res.on("data", function (chunk) {
                data += chunk;
                res.on("end", function () {
                    resolve(data);
                });
            });
        });
        req.end();
        req.on("error", function (e) {
            reject(e);
        });
    });
};
exports.prepareDeploy = function (urlOrOptions, options) {
    var urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    var uv = urlValidated;
    return new Promise(function (resolve, reject) {
        var req = uv.lib.request(__assign(__assign(__assign(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/prepare-deploy", host: uv.options.host }, (uv.options.port ? { port: uv.options.port } : {})), (uv.options.cert ? { cert: uv.options.cert } : {})), (uv.options.rejectUnauthorized
            ? { rejectUnauthorized: uv.options.rejectUnauthorized }
            : {})), (uv.options.ca ? { ca: uv.options.ca } : {})), function (res) {
            var data = "";
            res.on("data", function (chunk) {
                data += chunk;
                res.on("end", function () {
                    resolve(data);
                });
            });
        });
        req.write(JSON.stringify(options));
        req.end();
        req.on("error", function (e) {
            reject(e);
        });
    });
};
exports.dataAtName = function (urlOrOptions, options) {
    var urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    var uv = urlValidated;
    return new Promise(function (resolve, reject) {
        var req = uv.lib.request(__assign(__assign(__assign(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/data-at-name", host: uv.options.host }, (uv.options.port ? { port: uv.options.port } : {})), (uv.options.cert ? { cert: uv.options.cert } : {})), (uv.options.rejectUnauthorized
            ? { rejectUnauthorized: uv.options.rejectUnauthorized }
            : {})), (uv.options.ca ? { ca: uv.options.ca } : {})), function (res) {
            var data = "";
            res.on("data", function (chunk) {
                data += chunk;
                res.on("end", function () {
                    resolve(data);
                });
            });
        });
        req.write(JSON.stringify(options));
        req.end();
        req.on("error", function (e) {
            reject(e);
        });
    });
};
