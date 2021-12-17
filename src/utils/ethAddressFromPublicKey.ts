import * as keccak256 from "keccak256";
import { blake2bHex } from "blakejs";

import { bytesFromHex } from './bytesFromHex'

export const ethAddressFromPublicKey = (publicKey: string) => {
  if (!publicKey || publicKey.length !== 130) {
    throw new Error("Public key must contain 130 characters");
  }

  const pubKeyBytes = bytesFromHex(publicKey);
  const pkHash = keccak256(Buffer.from(pubKeyBytes.slice(1))).toString("hex");
  return `0x${pkHash.slice(-40).toLowerCase()}`
};
