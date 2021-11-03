import { DeployData } from "../models";

export const getDeployData = (
  timestamp: number,
  term: string,
  phloPrice = 1,
  phloLimit = 10000000,
  validAfterBlockNumber = 0
): DeployData => {
  return {
    timestamp: timestamp,
    term: term,
    phloLimit: phloLimit,
    phloPrice: phloPrice,
    validAfterBlockNumber: validAfterBlockNumber,
  };
};
