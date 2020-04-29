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
var http = require("http");
var https = require("https");
var validateUrl = function (url) {
    if (url.startsWith("http://")) {
        return {
            protocol: "http",
            host: url.substr(7).split(":")[0],
            port: url.substr(7).split(":")[1],
            lib: http
        };
    }
    else if (url.startsWith("https://")) {
        return {
            protocol: "https",
            host: url.substr(8).split(":")[0],
            port: url.substr(8).split(":")[1],
            lib: https
        };
    }
    else {
        throw new Error("URL most be http://ip_or_domain:port or https://ip_or_domain:port");
    }
};
exports.deploy = function (url, options) {
    var urlValidated = validateUrl(url);
    return new Promise(function (resolve, reject) {
        var req = urlValidated.lib.request(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/deploy", host: urlValidated.host }, (urlValidated.port ? { port: urlValidated.port } : {})), function (res) {
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
exports.exploreDeploy = function (url, options) {
    var urlValidated = validateUrl(url);
    return new Promise(function (resolve, reject) {
        var req = urlValidated.lib.request(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/explore-deploy", host: urlValidated.host }, (urlValidated.port ? { port: urlValidated.port } : {})), function (res) {
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
exports.blocks = function (url, options) {
    return new Promise(function (resolve, reject) {
        var urlValidated = validateUrl(url);
        var req = urlValidated.lib.request(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "GET", path: "/api/blocks/" + options.position, host: urlValidated.host }, (urlValidated.port ? { port: urlValidated.port } : {})), function (res) {
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
exports.prepareDeploy = function (url, options) {
    var urlValidated = validateUrl(url);
    return new Promise(function (resolve, reject) {
        var req = urlValidated.lib.request(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/prepare-deploy", host: urlValidated.host }, (urlValidated.port ? { port: urlValidated.port } : {})), function (res) {
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
exports.dataAtName = function (url, options) {
    var urlValidated = validateUrl(url);
    return new Promise(function (resolve, reject) {
        var req = urlValidated.lib.request(__assign({ headers: {
                "Content-Type": "application/json"
            }, method: "POST", path: "/api/data-at-name", host: urlValidated.host }, (urlValidated.port ? { port: urlValidated.port } : {})), function (res) {
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
