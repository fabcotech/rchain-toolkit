import { DeployData, LightBlockInfo } from "./models";
import { getDeployOptions, publicKeyFromPrivateKey } from "./utils";
import * as https from 'https';
import * as http from 'http';


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

  if (typeof timeout === 'number') {
    if ((options.data.term || '').indexOf("(`rho:rchain:deployId`)")=== -1) {
      console.warn('timeout is set and term does not include (`rho:rchain:deployId`), data-at-name may not work')
    }
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
            if (!data.toString().startsWith('"Success!')) {
              throw new Error(data.toString())
            }
            const unforgeableId = data.toString().slice(data.toString().indexOf(': ') + 2).replace('"', '');
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
                    UnforgDeploy: { data: unforgeableId },
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
  payload: {
    term: string,
    shardId?: string | undefined,
    privateKey: string,
    phloPrice: number | 'auto',
    phloLimit: number,
    timeout: undefined | number
  }
): Promise<string> => {
  let urlValidated: undefined | UrlValidated;
  if (typeof urlOrOptions === "string") {
    urlValidated = validateUrl({ url: urlOrOptions });
  } else {
    urlValidated = validateUrl(urlOrOptions);
  }
  const uv: UrlValidated = urlValidated;

  let phloPriceOk = 1;
  if (payload.phloPrice === 'auto') {
    phloPriceOk = JSON.parse(await status(urlOrOptions)).minPhloPrice as number;
  } else {
    phloPriceOk = payload.phloPrice;
  }

  const publicKey = publicKeyFromPrivateKey(payload.privateKey);
  const vab = await validAfterBlockNumber(urlOrOptions);
  const d = new Date().valueOf();
  const options = getDeployOptions(
    {
      timestamp: d,
      term: payload.term,
      shardId: payload.shardId,
      privateKey: payload.privateKey,
      phloPrice: phloPriceOk,
      phloLimit: payload.phloLimit,
      validAfterBlockNumber: vab
    }
  );

  let timeout = payload.timeout || undefined;

  if (typeof timeout === 'number') {
    if ((payload.term || '').indexOf("(`rho:rchain:deployId`)")=== -1) {
      console.warn('timeout is set and term does not include (`rho:rchain:deployId`), data-at-name may not work')
    }
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
            if (!data.toString().startsWith('"Success!')) {
              throw new Error(data.toString())
            }
            const unforgeableId = data.toString().slice(data.toString().indexOf(': ') + 2).replace('"', '');
            if (typeof timeout === "number") {
              let s = new Date().getTime();
              let ongoning = false;
              const interval = setInterval(async () => {
                if (ongoning) {
                  return;
                }
                ongoning = true;
                if (new Date().getTime() - (timeout as number) > s) {
                  clearInterval(interval);
                  throw new Error("TIMEOUT");
                }
                const dan = await dataAtName(urlOrOptions, {
                  name: {
                    UnforgDeploy: { data: unforgeableId },
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
// Status
// ==============

export interface StatusResponse {
  address: string;
  version: {
    api: string;
    node: string;
  };
  peers: number;
  nodes: number;
  minPhloPrice: string;
}
export const status = (
  urlOrOptions: string | ValidateUrlOptions
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
        method: "GET",
        path: "/api/status",
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

export interface DataAtNameByBlockHashOptions {
  name: {
    [nameType: string]: {
      data: string;
    };
  };
  blockHash: string;
  usePreStateHash: Boolean;
}
export const dataAtNameByBlockHash = (
  urlOrOptions: string | ValidateUrlOptions,
  options: DataAtNameByBlockHashOptions
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
        path: "/api/data-at-name-by-block-hash",
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
