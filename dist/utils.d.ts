/// <reference types="node" />
import { DeployData } from "./models";
import * as rnodeProtos from "./rnode-protos";
export * from "./utils/rhoValToJs";
export * from "./utils/rhoExprToVar";
export * from "./utils/decodePar";
export * from "./utils/getBlake2Hash";
export * from "./utils/getDeployData";
export * from "./utils/getDeployDataToSign";
export * from "./utils/revAddressFromPublicKey";
export * from "./utils/ethAddressFromPublicKey";
export declare const getFirstBlock: (blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]) => any;
export declare const getValueFromBlocks: (blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]) => rnodeProtos.IPar;
export declare const unforgeableWithId: (id: Buffer) => string;
export declare const mapToRhoRepr: (a: any) => rnodeProtos.EMap;
export declare const varToRhoExpr: (a: any) => rnodeProtos.IExpr;
export declare const toByteArray: (a: any) => Uint8Array;
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
