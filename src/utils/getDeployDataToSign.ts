import { DeployData } from "../models";
import { Type, Field } from 'protobufjs';

const dd = new Type(
  'DeployData',
  {}
);
  dd.fields = {
  term: new Field('term', 2, 'string'),
  timestamp: new Field('timestamp', 3, 'int64'),
  phloPrice: new Field('phloPrice', 7, 'int64'),
  phloLimit: new Field('phloLimit', 8, 'int64'),
  validAfterBlockNumber: new Field('validAfterBlockNumber', 10, 'int64'),
  shardId: new Field('shardId', 11, 'string'),
}

export const getDeployDataToSign = (deployData: DeployData): Uint8Array => {
return dd.encode(deployData).finish();
};
