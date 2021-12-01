"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const http = require("http");
const https = require("https");
const validateUrl = (options) => {
    if (options.url.startsWith("http://")) {
        return {
            protocol: "http",
            lib: http,
            options: {
                host: options.url.substr(7).split(":")[0],
                port: options.url.substr(7).split(":")[1],
            },
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
                ca: options.ca,
            },
        };
    }
    else {
        throw new Error("URL most be http://ip_or_domain:port or https://ip_or_domain:port");
    }
};
exports.deploy = async (urlOrOptions, options, timeout = undefined) => {
    let urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    const uv = urlValidated;
    let pd = undefined;
    if (typeof timeout === "number") {
        pd = await exports.prepareDeploy(urlOrOptions, {
            deployer: options.deployer,
            timestamp: options.data.timestamp,
            nameQty: 1,
        });
    }
    return new Promise((resolve, reject) => {
        const req = uv.lib.request({
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            path: "/api/deploy",
            host: uv.options.host,
            ...(uv.options.port ? { port: uv.options.port } : {}),
            ...(uv.options.cert ? { cert: uv.options.port } : {}),
            ...(uv.options.rejectUnauthorized
                ? { port: uv.options.rejectUnauthorized }
                : {}),
            ...(uv.options.ca ? { port: uv.options.ca } : {}),
        }, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
                res.on("end", () => {
                    if (typeof timeout === "number") {
                        let s = new Date().getTime();
                        let ongoning = false;
                        const interval = setInterval(async () => {
                            if (ongoning) {
                                return;
                            }
                            ongoning = true;
                            if (new Date().getTime() - timeout > s) {
                                clearInterval(interval);
                                throw new Error("TIMEOUT");
                            }
                            const dan = await exports.dataAtName(urlOrOptions, {
                                name: {
                                    UnforgPrivate: { data: JSON.parse(pd).names[0] },
                                },
                                depth: 3,
                            });
                            if (dan &&
                                JSON.parse(dan) &&
                                JSON.parse(dan).exprs &&
                                JSON.parse(dan).exprs.length) {
                                resolve(dan);
                                clearInterval(interval);
                            }
                            ongoning = false;
                        }, 4000);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
        req.write(JSON.stringify(options));
        req.end();
        req.on("error", (e) => {
            reject(e);
        });
    });
};
exports.easyDeploy = async (urlOrOptions, term, privateKey, phloPrice, phloLimit, timeout = undefined) => {
    let urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    const uv = urlValidated;
    const publicKey = utils_1.publicKeyFromPrivateKey(privateKey);
    const vab = await exports.validAfterBlockNumber(urlOrOptions);
    const d = new Date().valueOf();
    const options = utils_1.getDeployOptions("secp256k1", d, term, privateKey, publicKey, phloPrice, phloLimit, vab);
    let pd = undefined;
    if (typeof timeout === "number") {
        pd = await exports.prepareDeploy(urlOrOptions, {
            deployer: publicKey,
            timestamp: d,
            nameQty: 1,
        });
    }
    return new Promise((resolve, reject) => {
        const req = uv.lib.request({
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            path: "/api/deploy",
            host: uv.options.host,
            ...(uv.options.port ? { port: uv.options.port } : {}),
            ...(uv.options.cert ? { cert: uv.options.port } : {}),
            ...(uv.options.rejectUnauthorized
                ? { port: uv.options.rejectUnauthorized }
                : {}),
            ...(uv.options.ca ? { port: uv.options.ca } : {}),
        }, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
                res.on("end", () => {
                    if (typeof timeout === "number") {
                        let s = new Date().getTime();
                        let ongoning = false;
                        const interval = setInterval(async () => {
                            if (ongoning) {
                                return;
                            }
                            ongoning = true;
                            if (new Date().getTime() - timeout > s) {
                                clearInterval(interval);
                                throw new Error("TIMEOUT");
                            }
                            const dan = await exports.dataAtName(urlOrOptions, {
                                name: {
                                    UnforgPrivate: { data: JSON.parse(pd).names[0] },
                                },
                                depth: 3,
                            });
                            if (dan &&
                                JSON.parse(dan) &&
                                JSON.parse(dan).exprs &&
                                JSON.parse(dan).exprs.length) {
                                resolve(dan);
                                clearInterval(interval);
                            }
                            ongoning = false;
                        }, 4000);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
        req.write(JSON.stringify(options));
        req.end();
        req.on("error", (e) => {
            reject(e);
        });
    });
};
// ==============
// Valid after block number
// ==============
exports.validAfterBlockNumber = async (urlOrOptions) => {
    let validAfterBlockNumberResponse;
    validAfterBlockNumberResponse = JSON.parse(await exports.blocks(urlOrOptions, {
        position: 1,
    }))[0].blockNumber;
    return validAfterBlockNumberResponse;
};
exports.exploreDeploy = (urlOrOptions, options) => {
    let urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    const uv = urlValidated;
    return new Promise((resolve, reject) => {
        const req = uv.lib.request({
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            path: "/api/explore-deploy",
            host: uv.options.host,
            ...(uv.options.port ? { port: uv.options.port } : {}),
            ...(uv.options.cert ? { cert: uv.options.cert } : {}),
            ...(uv.options.rejectUnauthorized
                ? { rejectUnauthorized: uv.options.rejectUnauthorized }
                : {}),
            ...(uv.options.ca ? { ca: uv.options.ca } : {}),
        }, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
                res.on("end", () => {
                    resolve(data);
                });
            });
        });
        req.write(options.term);
        req.end();
        req.on("error", (e) => {
            reject(e);
        });
    });
};
exports.blocks = (urlOrOptions, options) => {
    return new Promise((resolve, reject) => {
        let urlValidated;
        if (typeof urlOrOptions === "string") {
            urlValidated = validateUrl({ url: urlOrOptions });
        }
        else {
            urlValidated = validateUrl(urlOrOptions);
        }
        const uv = urlValidated;
        const req = urlValidated.lib.request({
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
            path: "/api/blocks/" + options.position,
            host: uv.options.host,
            ...(uv.options.port ? { port: uv.options.port } : {}),
            ...(uv.options.cert ? { cert: uv.options.cert } : {}),
            ...(uv.options.rejectUnauthorized
                ? { rejectUnauthorized: uv.options.rejectUnauthorized }
                : {}),
            ...(uv.options.ca ? { ca: uv.options.ca } : {}),
        }, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
                res.on("end", () => {
                    resolve(data);
                });
            });
        });
        req.end();
        req.on("error", (e) => {
            reject(e);
        });
    });
};
exports.prepareDeploy = (urlOrOptions, options) => {
    let urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    const uv = urlValidated;
    return new Promise((resolve, reject) => {
        const req = uv.lib.request({
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            path: "/api/prepare-deploy",
            host: uv.options.host,
            ...(uv.options.port ? { port: uv.options.port } : {}),
            ...(uv.options.cert ? { cert: uv.options.cert } : {}),
            ...(uv.options.rejectUnauthorized
                ? { rejectUnauthorized: uv.options.rejectUnauthorized }
                : {}),
            ...(uv.options.ca ? { ca: uv.options.ca } : {}),
        }, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
                res.on("end", () => {
                    resolve(data);
                });
            });
        });
        req.write(JSON.stringify(options));
        req.end();
        req.on("error", (e) => {
            reject(e);
        });
    });
};
exports.dataAtName = (urlOrOptions, options) => {
    let urlValidated;
    if (typeof urlOrOptions === "string") {
        urlValidated = validateUrl({ url: urlOrOptions });
    }
    else {
        urlValidated = validateUrl(urlOrOptions);
    }
    const uv = urlValidated;
    return new Promise((resolve, reject) => {
        const req = uv.lib.request({
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            path: "/api/data-at-name",
            host: uv.options.host,
            ...(uv.options.port ? { port: uv.options.port } : {}),
            ...(uv.options.cert ? { cert: uv.options.cert } : {}),
            ...(uv.options.rejectUnauthorized
                ? { rejectUnauthorized: uv.options.rejectUnauthorized }
                : {}),
            ...(uv.options.ca ? { ca: uv.options.ca } : {}),
        }, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
                res.on("end", () => {
                    resolve(data);
                });
            });
        });
        req.write(JSON.stringify(options));
        req.end();
        req.on("error", (e) => {
            reject(e);
        });
    });
};
