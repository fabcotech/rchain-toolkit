
export const bytesFromHex = (hexStr: string) => {
  const byte2hex = ([arr, bhi]: [any[], number], x: any) =>
    bhi ? [[...arr, parseInt(`${bhi}${x}`, 16)]] : [arr, x];
  const [resArr] = Array.from(hexStr).reduce(byte2hex, [[]]);
  return Uint8Array.from(resArr);
};