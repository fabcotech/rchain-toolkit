import { DeployData } from "./models";

export const privateKey =
  "81f1f1b3eaa563dcaf928ee5d9aefd80fdd7300d777d3538eb10b9b10089dc65";
export const publicKey =
  "043262dd06cca940aaf306084d99eae00db225091340fc9343aa4652cf38a051a673aa3d3499dd11cf67448a5a791cc8a12fda3378e5cd9c73880065aa1aedbcf8";

// Payment
const timestamp = 1560802892221;
const term = `new hello in { hello!("world") }`;
const shardId = `dev`;
const phloLimit = 1000000;
const phloPrice = 1;
const validAfterBlockNumber = 0;

export const deployData: DeployData = {
  timestamp,
  term,
  phloLimit,
  shardId,
  phloPrice,
  validAfterBlockNumber
};


export const deployDataToSign = new Uint8Array([
  18,  32, 110, 101, 119,  32, 104, 101, 108, 108,
 111,  32, 105, 110,  32, 123,  32, 104, 101, 108,
 108, 111,  33,  40,  34, 119, 111, 114, 108, 100,
  34,  41,  32, 125,  24, 189, 179, 232, 184, 182,
  45,  56,   1,  64, 192, 132,  61,  80,   0,  90,
   3, 100, 101, 118
]);

export const hash = new Uint8Array(
  [
    201,  66, 153, 124,  29, 232, 243, 219,
    179, 139,  15, 135,  75,  34,  25, 157,
    237,  47, 146,   1,   7,  12, 251, 241,
    244,  74, 105,  89, 153, 207, 167, 125
  ]
);

export const deployDataSecp256k1 = {
  ...deployData,
  deployer: Buffer.from(
    new Uint8Array([
      4,
      50,
      98,
      221,
      6,
      204,
      169,
      64,
      170,
      243,
      6,
      8,
      77,
      153,
      234,
      224,
      13,
      178,
      37,
      9,
      19,
      64,
      252,
      147,
      67,
      170,
      70,
      82,
      207,
      56,
      160,
      81,
      166,
      115,
      170,
      61,
      52,
      153,
      221,
      17,
      207,
      103,
      68,
      138,
      90,
      121,
      28,
      200,
      161,
      47,
      218,
      51,
      120,
      229,
      205,
      156,
      115,
      136,
      0,
      101,
      170,
      26,
      237,
      188,
      248
    ])
  ),
  sig: new Uint8Array(
    [
      48,  69,   2,  33,   0, 202, 244,   8, 167, 208, 121, 233,
     100, 104, 151, 198, 218, 148,  13, 105, 254, 110,  12, 230,
      96,  86, 232, 123,  29, 237,  80, 137,  71, 254,  23,   2,
      79,   2,  32,  68, 110,  76,  90, 165, 183,   5,  30, 182,
     201, 172, 221, 233,  61, 251, 224, 192,  53,  87, 136,  20,
      33,  38, 142,  65,  73,  25,  36, 102,   9,  28,  19
   ]
  ),
  sigAlgorithm: "secp256k1",
  validAfterBlockNumber: 0
};

export const privateName =
  "fc60308a5512c265b978b46d7283f2d5f7aa12f64a5b1874df26ef3be827f57e";
