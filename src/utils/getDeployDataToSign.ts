import { DeployData } from "../models";
import * as rnodeProtos from "../rnode-protos";

export const getDeployDataToSign = (payment: DeployData): Uint8Array => {
  return rnodeProtos.casper.DeployDataProto.encode(payment).finish();
};
