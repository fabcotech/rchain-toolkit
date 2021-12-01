import { DeployData, LightBlockInfo } from "./models";
export interface ValidateUrlOptions {
    url: string;
    rejectUnauthorized?: boolean;
    cert?: string;
    ca?: string[];
}
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
export declare const deploy: (urlOrOptions: string | ValidateUrlOptions, options: DeployOptions, timeout?: number) => Promise<string>;
export interface DeployResponse {
    names: string[];
    blockNumber: number;
}
export declare const easyDeploy: (urlOrOptions: string | ValidateUrlOptions, term: string, privateKey: string, phloPrice: number, phloLimit: number, timeout?: number) => Promise<string>;
export declare const validAfterBlockNumber: (urlOrOptions: string | ValidateUrlOptions) => Promise<number>;
export interface ExploreDeployOptions {
    term: string;
}
export interface ExploreDeployResponse {
    names: string[];
    blockNumber: number;
}
export declare const exploreDeploy: (urlOrOptions: string | ValidateUrlOptions, options: ExploreDeployOptions) => Promise<any>;
export interface BlocksOptions {
    position: number;
}
export interface BlocksResponse {
    blocks: LightBlockInfo[];
}
export declare const blocks: (urlOrOptions: string | ValidateUrlOptions, options: BlocksOptions) => Promise<any>;
export interface PrepareDeployOptions {
    deployer: string;
    timestamp: number;
    nameQty: number;
}
export interface PrepareDeployResponse {
    names: string[];
    blockNumber: number;
}
export declare const prepareDeploy: (urlOrOptions: string | ValidateUrlOptions, options: PrepareDeployOptions) => Promise<string>;
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
export declare const dataAtName: (urlOrOptions: string | ValidateUrlOptions, options: DataAtNameOptions) => Promise<string>;
