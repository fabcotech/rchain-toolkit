import { DeployData } from "../models";
import * as jspb from 'google-protobuf'

export const getDeployDataToSign = (dd: DeployData): Uint8Array => {

  // Create binary stream writer
  const writer = new jspb.BinaryWriter()
  // Write fields (protobuf doesn't serialize default values)
  const writeString = (order: number, val: string) => val != "" && writer.writeString(order, val)
  const writeInt64  = (order: number, val: number) => val != 0  && writer.writeInt64(order, val)

  // Serialize fields
  writeString(2, dd.term)
  writeInt64(3, dd.timestamp)
  writeInt64(7, dd.phloPrice)
  writeInt64(8, dd.phloLimit)
  writeInt64(10, dd.validAfterBlockNumber)
  writeString(11, dd.shardId)

  return Buffer.from(writer.getResultBuffer());
};
