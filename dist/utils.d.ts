/// <reference types="node" />
import { DeployData } from "./models";
import * as rnodeProtos from "./rnode-protos";
export declare const getFirstBlock: (blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]) => any;
export declare const getValueFromBlocks: (blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]) => rnodeProtos.IPar;
export declare const rhoValToJs: (expr: any) => any;
export declare const unforgeableWithId: (id: Buffer) => string;
export declare const getDeployData: (timestamp: number, term: string, phloPrice?: number, phloLimit?: number, validAfterBlockNumber?: number) => DeployData;
export declare const getDeployDataToSign: (payment: DeployData) => Uint8Array;
export declare const getBlake2Hash: (toHash: Uint8Array, length?: number) => Uint8Array;
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
export declare const revAddressFromPublicKey: (publicKey: string) => string;
export declare const publicKeyFromPrivateKey: (privateKey: string) => string;
