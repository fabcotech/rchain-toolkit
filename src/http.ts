import { DeployData, LightBlockInfo } from "./models";
import { getDeployOptions, publicKeyFromPrivateKey } from "./utils";

const http = require("http");
const https = require("https");

const validateUrl = (url: string) => {
  if (url.startsWith("http://")) {
    return {
      protocol: "http",
      host: url.substr(7).split(":")[0],
      port: url.substr(7).split(":")[1],
      lib: http,
    };
  } else if (url.startsWith("https://")) {
    return {
      protocol: "https",
      host: url.substr(8).split(":")[0],
      port: url.substr(8).split(":")[1],
      lib: https,
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
  url: string,
  options: DeployOptions,
  timeout: undefined | number = undefined
): Promise<string> => {
  const urlValidated = validateUrl(url);

  let pd: undefined | string = undefined;
  if (typeof timeout === "number") {
    pd = await prepareDeploy(url, {
      deployer: options.deployer,
      timestamp: options.data.timestamp,
      nameQty: 1,
    });
  }

  return new Promise((resolve, reject) => {
    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        path: "/api/deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {}),
      },

      (res) => {
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
                const dan = await dataAtName(url, {
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
  url: string,
  term: string,
  privateKey: string,
  phloPrice: number,
  phloLimit: number,
  timeout: undefined | number = undefined
): Promise<string> => {
  const urlValidated = validateUrl(url);

  const publicKey = publicKeyFromPrivateKey(privateKey);
  const vab = await validAfterBlockNumber(url);
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
    pd = await prepareDeploy(url, {
      deployer: publicKey,
      timestamp: d,
      nameQty: 1,
    });
  }

  return new Promise((resolve, reject) => {
    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        path: "/api/deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {}),
      },

      (res) => {
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
                const dan = await dataAtName(url, {
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
export const validAfterBlockNumber = async (url: string): Promise<number> => {
  let validAfterBlockNumberResponse;
  validAfterBlockNumberResponse = JSON.parse(
    await blocks(url, {
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
  url: string,
  options: ExploreDeployOptions
): Promise<any> => {
  const urlValidated = validateUrl(url);

  return new Promise((resolve, reject) => {
    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        path: "/api/explore-deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {}),
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
export const blocks = (url: string, options: BlocksOptions): Promise<any> => {
  return new Promise((resolve, reject) => {
    const urlValidated = validateUrl(url);

    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        path: "/api/blocks/" + options.position,
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {}),
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
  url: string,
  options: PrepareDeployOptions
): Promise<string> => {
  const urlValidated = validateUrl(url);

  return new Promise((resolve, reject) => {
    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        path: "/api/prepare-deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {}),
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
  url: string,
  options: DataAtNameOptions
): Promise<string> => {
  const urlValidated = validateUrl(url);

  return new Promise((resolve, reject) => {
    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        path: "/api/data-at-name",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {}),
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
