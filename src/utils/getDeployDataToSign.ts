import { DeployData } from "../models";
import * as jspb from 'google-protobuf'

export const getDeployDataToSign = (payment: DeployData): Uint8Array => {

  // Create binary stream writer
  const writer = new jspb.BinaryWriter()
  // Write fields (protobuf doesn't serialize default values)
  const writeString = (order: number, val: string) => val != "" && writer.writeString(order, val)
  const writeInt64  = (order: number, val: number) => val != 0  && writer.writeInt64(order, val)

  // Serialize fields
  writeString(2, payment.term)
  writeInt64(3, payment.timestamp)
  writeInt64(7, payment.phloPrice)
  writeInt64(8, payment.phloLimit)
  writeInt64(10, payment.validAfterBlockNumber)

  return Buffer.from(writer.getResultBuffer());
};
