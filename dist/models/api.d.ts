/// <reference types="node" />
export declare type Either = EitherSuccess | EitherError;
export interface EitherSuccess {
    content: "success";
    success: {
        response: {
            type_url: string;
            value: Buffer;
        };
    };
}
export interface EitherError {
    content: "error";
    error: {
        messages: string[];
    };
}
export interface PrivateNamePreviewResponse {
    ids: Buffer[];
}
export interface DoDeployResponse {
    message: string;
}
export interface Long {
    low: number;
    high: number;
    unsigned: boolean;
}
export interface LightBlockInfo {
    parentsHashList: any[];
    blockHash: string;
    blockSize: string;
    seqNum: number;
    blockNumber: number;
    version: Long;
    deployCount: 14;
    tupleSpaceHash: string;
    timestamp: Long;
    faultTolerance: number;
}
export interface Par {
    sends: any;
    receives: any;
    news: any;
    exprs: any;
    matches: any;
    unforgeables: any;
    bundles: any;
    connectives: any;
}
export interface DataWithBlockInfo {
    postBlockData: Par[];
}
export interface DataWithBlockInfo {
    postBlockData: Par[];
    block: LightBlockInfo;
}
export interface ListeningNameDataResponse {
    blockResults: DataWithBlockInfo[];
}
