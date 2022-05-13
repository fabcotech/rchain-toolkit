import { keccak256 } from "@ethersproject/keccak256";

import { bytesFromHex } from './bytesFromHex'

export const ethAddressFromPublicKey = (publicKey: string) => {
  if (!publicKey || publicKey.length !== 130) {
    throw new Error("Public key must contain 130 characters");
  }

  const pubKeyBytes = bytesFromHex(publicKey);
  return `0x${keccak256(pubKeyBytes.slice(1)).slice(-40)}`
};
