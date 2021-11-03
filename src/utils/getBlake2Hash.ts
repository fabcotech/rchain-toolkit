import { blake2bInit, blake2bUpdate, blake2bFinal } from "blakejs";

export const getBlake2Hash = (toHash: Uint8Array, length = 32): Uint8Array => {
  const context = blake2bInit(length, null);
  blake2bUpdate(context, toHash);
  return blake2bFinal(context);
};
