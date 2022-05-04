import { DeployData } from "../models";

export const getDeployData = (payload: {
  timestamp: number,
  term: string,
  shardId: string,
  phloPrice: number,
  phloLimit: number,
  validAfterBlockNumber: number
}): DeployData => {
  return {
    shardId: payload.shardId,
    timestamp: payload.timestamp,
    term: payload.term,
    phloLimit: typeof payload.phloLimit === 'number' ? payload.phloLimit : 10000000,
    phloPrice: typeof payload.phloPrice === 'number' ? payload.phloPrice : 1,
    validAfterBlockNumber: typeof payload.validAfterBlockNumber === 'number' ? payload.validAfterBlockNumber : 0,
  };
};
