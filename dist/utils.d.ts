import { Payment, DeployData, SigAlgorithm } from "./models/models";
export declare const getValueFromBlocks: (blocks: any) => any;
export declare const rholangMapToJsObject: (map: any) => {
    [key: string]: any;
};
export declare const unforgeableWithId: (id: string) => string;
export declare const getPayment: (timestamp: number, term: string, phloPrice?: number, phloLimit?: number) => Payment;
export declare const getDeployDataToSign: (payment: Payment) => Promise<Uint8Array>;
export declare const getBlake2Hash: (toHash: Uint8Array) => Uint8Array;
export declare const getKeccak256Hash: (toHash: Uint8Array) => Uint8Array;
export declare const verifyPrivateAndPublicKey: (privateKey: string, publicKey: string) => void;
export declare const signSecp256k1: (hash: Uint8Array, privateKey: string) => Uint8Array;
export declare const signEd25519: (hash: Uint8Array, privateKey: string) => Uint8Array;
export declare const getDeployData: (sigAlgorithm: SigAlgorithm, timestamp: number, term: string, privateKey: string, publicKey: string, phloPrice?: number, phloLimit?: number) => Promise<DeployData>;
