import * as keccak256 from "keccak256";
import { blake2bHex } from "blakejs";

import * as base58 from "../base58";
import { ethAddressFromPublicKey } from './ethAddressFromPublicKey';
import { bytesFromHex } from './bytesFromHex';

const toBase58 = (hexStr: string) => {
  const bytes = bytesFromHex(hexStr);
  return base58.encode(bytes);
};

// Address and public key

// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47

// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13

const prefix = { coinId: "000000", version: "00" };

const getAddrFromEth = (ethAddr: string): string => {
  if (!ethAddr || ethAddr.length !== 40) {
    throw new Error("ETH address must contain 130 characters");
  }

  // Hash ETH address
  const ethAddrBytes = bytesFromHex(ethAddr);
  const ethHash = keccak256(Buffer.from(ethAddrBytes)).toString("hex");

  // Add prefix with hash and calculate checksum (blake2b-256 hash)
  const payload = `${prefix.coinId}${prefix.version}${ethHash}`;
  const payloadBytes = bytesFromHex(payload);
  const checksum = blake2bHex(payloadBytes, void 666, 32).slice(0, 8);

  // Return REV address
  return toBase58(`${payload}${checksum}`);
};

export const revAddressFromPublicKey = (publicKey: string) => {
  const ethAddressWithoutPrefix = ethAddressFromPublicKey(publicKey).slice(2)
  return getAddrFromEth(ethAddressWithoutPrefix);
};
