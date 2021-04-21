/// <reference types="node" />
import { DeployData } from "./models";
export declare const privateKey = "81f1f1b3eaa563dcaf928ee5d9aefd80fdd7300d777d3538eb10b9b10089dc65";
export declare const publicKey = "043262dd06cca940aaf306084d99eae00db225091340fc9343aa4652cf38a051a673aa3d3499dd11cf67448a5a791cc8a12fda3378e5cd9c73880065aa1aedbcf8";
export declare const deployData: DeployData;
export declare const deployDataToSign: Uint8Array;
export declare const hash: Uint8Array;
export declare const deployDataSecp256k1: {
    deployer: Buffer;
    sig: Uint8Array;
    sigAlgorithm: string;
    validAfterBlockNumber: number;
    timestamp: number;
    term: string;
    phloPrice: number;
    phloLimit: number;
};
export declare const privateName = "fc60308a5512c265b978b46d7283f2d5f7aa12f64a5b1874df26ef3be827f57e";
