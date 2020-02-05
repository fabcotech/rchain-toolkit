import { DeployData } from "./models";
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
export declare const deploy: (url: string, options: DeployOptions) => Promise<string>;
export interface PrepareDeployOptions {
    deployer: string;
    timestamp: number;
    nameQty: number;
}
export interface PrepareDeployResponse {
    names: string[];
    blockNumber: number;
}
export declare const prepareDeploy: (url: string, options: PrepareDeployOptions) => Promise<string>;
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
        expr: {
            [type: string]: {
                data: any;
            };
        };
        block: {
            blockHash: string;
            blockNumber: number;
        };
    }[];
    blockNumber: number;
}
export declare const dataAtName: (url: string, options: DataAtNameOptions) => Promise<string>;
