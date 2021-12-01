/// <reference types="node" />
import { DeployData } from "./models";
export * from "./utils/rhoValToJs";
export * from "./utils/rhoExprToVar";
export * from "./utils/decodePar";
export * from "./utils/getBlake2Hash";
export * from "./utils/getDeployData";
export * from "./utils/getDeployDataToSign";
export * from "./utils/revAddressFromPublicKey";
export declare const getFirstBlock: (blockInfo: any[]) => any;
export declare const getValueFromBlocks: (blockInfo: any[]) => any;
export declare const unforgeableWithId: (id: Buffer) => string;
export declare const mapToRhoRepr: (a: any) => any;
export declare const varToRhoExpr: (a: any) => any;
export declare const toByteArray: (a: any) => any;
export declare const verifyPrivateAndPublicKey: (privateKey: string, publicKey: string) => void;
export declare const signSecp256k1: (hash: Uint8Array, privateKey: string) => Uint8Array;
export declare const transferRevTerm: (a: {
    from: string;
    to: string;
    amount: number;
}) => string;
export declare const getDeployOptions: (sigAlgorithm: "secp256k1", timestamp: number, term: string, privateKey: string, publicKey: string, phloPrice?: number, phloLimit?: number, validAfterBlockNumber?: number) => {
    data: DeployData;
    deployer: string;
    signature: string;
    sigAlgorithm: "secp256k1";
};
export declare const publicKeyFromPrivateKey: (privateKey: string) => string;
