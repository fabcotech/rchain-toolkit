export interface DeployData {
  timestamp: number;
  term: string;
  phloPrice: number;
  phloLimit: number;
  validAfterBlockNumber: number;
}

export type SigAlgorithm = "secp256k1";
