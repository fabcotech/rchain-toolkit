import { DeployData, LightBlockInfo } from "./models";
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
export declare const deploy: (url: string, options: DeployOptions, timeout?: undefined | number) => Promise<string>;
export interface DeployResponse {
    names: string[];
    blockNumber: number;
}
export declare const easyDeploy: (url: string, term: string, privateKey: string, phloPrice: number, phloLimit: number, timeout?: undefined | number) => Promise<string>;
export declare const validAfterBlockNumber: (url: string) => Promise<number>;
export interface ExploreDeployOptions {
    term: string;
}
export interface ExploreDeployResponse {
    names: string[];
    blockNumber: number;
}
export declare const exploreDeploy: (url: string, options: ExploreDeployOptions) => Promise<any>;
export interface BlocksOptions {
    position: number;
}
export interface BlocksResponse {
    blocks: LightBlockInfo[];
}
export declare const blocks: (url: string, options: BlocksOptions) => Promise<any>;
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
