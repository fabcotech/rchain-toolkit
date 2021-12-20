import { DeployData, LightBlockInfo } from "./models";
import { getDeployOptions, publicKeyFromPrivateKey } from "./utils";

const http = require("http");
const https = require("https");

interface UrlValidated {
  options: {
    host: string;
    port: string;
    rejectUnauthorized?: boolean;
    cert?: string;
    ca?: string[];
  };
  protocol: "http" | "https";
  lib: any;
}
export interface ValidateUrlOptions {
  url: string;
  rejectUnauthorized?: boolean;
  cert?: string;
  ca?: string[];
}
const validateUrl = (options: ValidateUrlOptions): UrlValidated => {
  if (options.url.startsWith("http://")) {
    return {
      protocol: "http",
      lib: http,
      options: {
        host: options.url.substr(7).split(":")[0],
        port: options.url.substr(7).split(":")[1],
      },
    };
  } else if (options.url.startsWith("https://")) {
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
  } else {
    throw new Error(
      "URL most be http://ip_or_domain:port or https://ip_or_domain:port"
    );
  }
};

// ==============
// Deploy
// ==============

export interface DeployOptions {
  data: DeployData;
  deployer: string;
  signature: string;
  sigAlgorithm: "secp256k1";
}
export interface DeployResponse {
  names: string[];
  blockNumber: number;
}
export const deploy = async (
  urlOrOptions: string | ValidateUrlOptions,
  options: DeployOptions,
  timeout: undefined | number = undefined
): Promise<string> => {
  let urlValidated: undefined | UrlValidated;
  if (typeof urlOrOptions === "string") {
    urlValidated = validateUrl({ url: urlOrOptions });
  } else {
    urlValidated = validateUrl(urlOrOptions);
  }
  const uv: UrlValidated = urlValidated;

  let pd: undefined | string = undefined;
  if (typeof timeout === "number") {
    pd = await prepareDeploy(urlOrOptions, {
      deployer: options.deployer,
      timestamp: options.data.timestamp,
      nameQty: 1,
    });
  }

  return new Promise((resolve, reject) => {
    const req = uv.lib.request(
      {
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
      },

      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          res.on("end", () => {
            if (!data.toString('utf8').startsWith('"Success!')) {
              throw new Error(data.toString('utf8'))
            }
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
                const dan = await dataAtName(urlOrOptions, {
                  name: {
                    UnforgPrivate: { data: JSON.parse(pd as string).names[0] },
                  },
                  depth: 3,
                });
                if (
                  dan &&
                  JSON.parse(dan) &&
                  JSON.parse(dan).exprs &&
                  JSON.parse(dan).exprs.length
                ) {
                  resolve(dan);
                  clearInterval(interval);
                }
                ongoning = false;
              }, 4000);
            } else {
              resolve(data);
            }
          });
        });
      }
    );
    req.write(JSON.stringify(options));
    req.end();
    req.on("error", (e) => {
      reject(e);
    });
  });
};

// ==============
// Easy eploy
// ==============

export interface DeployResponse {
  names: string[];
  blockNumber: number;
}
export const easyDeploy = async (
  urlOrOptions: string | ValidateUrlOptions,
  term: string,
  privateKey: string,
  phloPrice: number,
  phloLimit: number,
  timeout: undefined | number = undefined
): Promise<string> => {
  let urlValidated: undefined | UrlValidated;
  if (typeof urlOrOptions === "string") {
    urlValidated = validateUrl({ url: urlOrOptions });
  } else {
    urlValidated = validateUrl(urlOrOptions);
  }
  const uv: UrlValidated = urlValidated;

  const publicKey = publicKeyFromPrivateKey(privateKey);
  const vab = await validAfterBlockNumber(urlOrOptions);
  const d = new Date().valueOf();
  const options = getDeployOptions(
    "secp256k1",
    d,
    term,
    privateKey,
    publicKey,
    phloPrice,
    phloLimit,
    vab
  );

  let pd: undefined | string = undefined;
  if (typeof timeout === "number") {
    pd = await prepareDeploy(urlOrOptions, {
      deployer: publicKey,
      timestamp: d,
      nameQty: 1,
    });
  }

  return new Promise((resolve, reject) => {
    const req = uv.lib.request(
      {
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
      },

      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          res.on("end", () => {
            if (!data.toString('utf8').startsWith('"Success!')) {
              throw new Error(data.toString('utf8'))
            }
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
                const dan = await dataAtName(urlOrOptions, {
                  name: {
                    UnforgPrivate: { data: JSON.parse(pd as string).names[0] },
                  },
                  depth: 3,
                });
                if (
                  dan &&
                  JSON.parse(dan) &&
                  JSON.parse(dan).exprs &&
                  JSON.parse(dan).exprs.length
                ) {
                  resolve(dan);
                  clearInterval(interval);
                }
                ongoning = false;
              }, 4000);
            } else {
              resolve(data);
            }
          });
        });
      }
    );
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
export const validAfterBlockNumber = async (
  urlOrOptions: string | ValidateUrlOptions
): Promise<number> => {
  let validAfterBlockNumberResponse;
  validAfterBlockNumberResponse = JSON.parse(
    await blocks(urlOrOptions, {
      position: 1,
    })
  )[0].blockNumber;
  return validAfterBlockNumberResponse;
};

// ==============
// Exploratory deploy
// ==============

export interface ExploreDeployOptions {
  term: string;
}
export interface ExploreDeployResponse {
  names: string[];
  blockNumber: number;
}
export const exploreDeploy = (
  urlOrOptions: string | ValidateUrlOptions,
  options: ExploreDeployOptions
): Promise<any> => {
  let urlValidated: undefined | UrlValidated;
  if (typeof urlOrOptions === "string") {
    urlValidated = validateUrl({ url: urlOrOptions });
  } else {
    urlValidated = validateUrl(urlOrOptions);
  }
  const uv: UrlValidated = urlValidated;

  return new Promise((resolve, reject) => {
    const req = uv.lib.request(
      {
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
      },

      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );
    req.write(options.term);
    req.end();
    req.on("error", (e) => {
      reject(e);
    });
  });
};

// ==============
// Blocks by position
// ==============

export interface BlocksOptions {
  position: number;
}
export interface BlocksResponse {
  blocks: LightBlockInfo[];
}
export const blocks = (
  urlOrOptions: string | ValidateUrlOptions,
  options: BlocksOptions
): Promise<any> => {
  return new Promise((resolve, reject) => {
    let urlValidated: undefined | UrlValidated;
    if (typeof urlOrOptions === "string") {
      urlValidated = validateUrl({ url: urlOrOptions });
    } else {
      urlValidated = validateUrl(urlOrOptions);
    }
    const uv: UrlValidated = urlValidated;

    const req = urlValidated.lib.request(
      {
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
      },

      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );

    req.end();
    req.on("error", (e) => {
      reject(e);
    });
  });
};

// ==============
// PrepareDeploy
// ==============

export interface PrepareDeployOptions {
  deployer: string;
  timestamp: number;
  nameQty: number;
}
export interface PrepareDeployResponse {
  names: string[];
  blockNumber: number;
}
export const prepareDeploy = (
  urlOrOptions: string | ValidateUrlOptions,
  options: PrepareDeployOptions
): Promise<string> => {
  let urlValidated: undefined | UrlValidated;
  if (typeof urlOrOptions === "string") {
    urlValidated = validateUrl({ url: urlOrOptions });
  } else {
    urlValidated = validateUrl(urlOrOptions);
  }
  const uv: UrlValidated = urlValidated;

  return new Promise((resolve, reject) => {
    const req = uv.lib.request(
      {
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
      },

      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );

    req.write(JSON.stringify(options));
    req.end();
    req.on("error", (e) => {
      reject(e);
    });
  });
};

// data-at-name
type NameType = "UnforgPrivate" | "UnforgDeploy" | "UnforgDeployer";
export interface DataAtNameOptions {
  name: {
    [nameType: string]: {
      data: string;
    };
  };
  depth: number;
}

export interface DataAtNameReponse {
  exprs: {
    expr: { [type: string]: { data: any } };
    block: { blockHash: string; blockNumber: number };
  }[];
  blockNumber: number;
}
export const dataAtName = (
  urlOrOptions: string | ValidateUrlOptions,
  options: DataAtNameOptions
): Promise<string> => {
  let urlValidated: undefined | UrlValidated;
  if (typeof urlOrOptions === "string") {
    urlValidated = validateUrl({ url: urlOrOptions });
  } else {
    urlValidated = validateUrl(urlOrOptions);
  }
  const uv: UrlValidated = urlValidated;

  return new Promise((resolve, reject) => {
    const req = uv.lib.request(
      {
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
      },

      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );
    req.write(JSON.stringify(options));
    req.end();
    req.on("error", (e) => {
      reject(e);
    });
  });
};
