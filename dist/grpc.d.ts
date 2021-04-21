import { DeployData } from "./models/models";
import * as rnodeProtos from "./rnode-protos";
export declare const getMethod: (options: any, client: any, method: string) => any;
export declare const getBlock: (options: any, client: any) => Promise<rnodeProtos.casper.v1.DeployService.getBlockCallback>;
export declare const getBlocks: (options: any, client: any) => Promise<rnodeProtos.casper.v1.DeployService.getBlocksCallback>;
export declare const lastFinalizedBlock: (client: any) => Promise<rnodeProtos.casper.v1.DeployService.lastFinalizedBlockCallback>;
export declare const doDeploy: (options: DeployData, client: any) => Promise<rnodeProtos.casper.v1.DeployResponse>;
export declare const previewPrivateNames: (options: any, client: any) => Promise<rnodeProtos.casper.v1.PrivateNamePreviewResponse>;
export declare const propose: (options: any, client: any) => Promise<rnodeProtos.casper.v1.ProposeResponse>;
export declare const getClient: (grpcEndPoint: string, grpc: any, protoLoader: any, protoService: "deployService" | "proposeService") => Promise<unknown>;
export declare const getGrpcProposeClient: (grpcEndPoint: string, grpc: any, protoLoader: any) => Promise<unknown>;
