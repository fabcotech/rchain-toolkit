import { DeployData } from "./models/models";
import * as rnodeProtos from "./rnode-protos";
export declare const getMethod: (options: any, client: any, method: string) => any;
export declare const listenForDataAtName: (options: any, client: any) => Promise<rnodeProtos.casper.v1.ListeningNameDataResponse>;
export declare const doDeploy: (options: DeployData, client: any) => Promise<rnodeProtos.casper.v1.DeployResponse>;
export declare const previewPrivateNames: (options: any, client: any) => Promise<rnodeProtos.casper.v1.PrivateNamePreviewResponse>;
export declare const propose: (options: any, client: any) => Promise<rnodeProtos.casper.v1.ProposeResponse>;
export declare const getGrpcDeployClient: (grpcEndPoint: string, grpc: any, protoLoader: any) => Promise<unknown>;
export declare const getGrpcProposeClient: (grpcEndPoint: string, grpc: any, protoLoader: any) => Promise<unknown>;
