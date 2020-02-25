"use strict";
exports.__esModule = true;
var http = require("http");
exports.deploy = function (url, options) {
    return new Promise(function (resolve, reject) {
        var req = http.request({
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            host: url.split(":")[0],
            path: "/api/deploy",
            port: url.split(":")[1]
        }, function (res) {
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
    return new Promise(function (resolve, reject) {
        var req = http.request({
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            host: url.split(":")[0],
            path: "/api/explore-deploy",
            port: url.split(":")[1]
        }, function (res) {
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
        var req = http.request({
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET",
            host: url.split(":")[0],
            path: "/api/blocks/" + options.position,
            port: url.split(":")[1]
        }, function (res) {
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
    return new Promise(function (resolve, reject) {
        var req = http.request({
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            host: url.split(":")[0],
            path: "/api/prepare-deploy",
            port: url.split(":")[1]
        }, function (res) {
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
    return new Promise(function (resolve, reject) {
        var req = http.request({
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            host: url.split(":")[0],
            path: "/api/data-at-name",
            port: url.split(":")[1]
        }, function (res) {
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
