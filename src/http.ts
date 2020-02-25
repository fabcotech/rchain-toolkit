import { DeployData, LightBlockInfo } from "./models";

const http = require("http");

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
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        host: url.split(":")[0],
        path: "/api/deploy",
        port: url.split(":")[1]
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
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        host: url.split(":")[0],
        path: "/api/explore-deploy",
        port: url.split(":")[1]
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
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET",
        host: url.split(":")[0],
        path: "/api/blocks/" + options.position,
        port: url.split(":")[1]
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
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        host: url.split(":")[0],
        path: "/api/prepare-deploy",
        port: url.split(":")[1]
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
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        host: url.split(":")[0],
        path: "/api/data-at-name",
        port: url.split(":")[1]
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
