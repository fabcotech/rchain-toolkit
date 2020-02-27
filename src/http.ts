import { DeployData, LightBlockInfo } from "./models";

const http = require("http");
const https = require("https");

const validateUrl = (url: string) => {
  if (url.startsWith("http://")) {
    return {
      protocol: "http",
      host: url.substr(7).split(":")[0],
      port: url.substr(7).split(":")[1],
      lib: http
    };
  } else if (url.startsWith("https://")) {
    return {
      protocol: "https",
      host: url.substr(8).split(":")[0],
      port: url.substr(8).split(":")[1],
      lib: https
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
export const deploy = (
  url: string,
  options: DeployOptions
): Promise<string> => {
  const urlValidated = validateUrl(url);

  return new Promise((resolve, reject) => {
    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        path: "/api/deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {})
      },

      res => {
        let data = "";
        res.on("data", chunk => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );
    req.write(JSON.stringify(options));
    req.end();
    req.on("error", e => {
      reject(e);
    });
  });
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
          "Content-Type": "application/json"
        },
        method: "POST",
        path: "/api/explore-deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {})
      },

      res => {
        let data = "";
        res.on("data", chunk => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );
    req.write(options.term);
    req.end();
    req.on("error", e => {
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
  const urlValidated = validateUrl(url);

  return new Promise((resolve, reject) => {
    const urlValidated = validateUrl(url);

    const req = urlValidated.lib.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET",
        path: "/api/blocks/" + options.position,
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {})
      },

      res => {
        let data = "";
        res.on("data", chunk => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );

    req.end();
    req.on("error", e => {
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
          "Content-Type": "application/json"
        },
        method: "POST",
        path: "/api/prepare-deploy",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {})
      },

      res => {
        let data = "";
        res.on("data", chunk => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );

    req.write(JSON.stringify(options));
    req.end();
    req.on("error", e => {
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
          "Content-Type": "application/json"
        },
        method: "POST",
        path: "/api/data-at-name",
        host: urlValidated.host,
        ...(urlValidated.port ? { port: urlValidated.port } : {})
      },

      res => {
        let data = "";
        res.on("data", chunk => {
          data += chunk;
          res.on("end", () => {
            resolve(data);
          });
        });
      }
    );
    req.write(JSON.stringify(options));
    req.end();
    req.on("error", e => {
      reject(e);
    });
  });
};
