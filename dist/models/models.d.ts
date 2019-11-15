/// <reference types="node" />
export interface Payment {
    timestamp: number;
    term: string;
    phloPrice: number;
    phloLimit: number;
}
export declare type SigAlgorithm = "ed25519" | "secp256k1";
export interface DeployData extends Payment {
    deployer: Buffer;
    sig: Uint8Array;
    sigAlgorithm: SigAlgorithm;
    validAfterBlockNumber: number;
}
