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
   45,  56,   1,  64, 192, 132,  61,  90,   3, 100,
  101, 118
]);

export const hash = new Uint8Array([
  31,  54,  63, 117, 119,  36, 186, 181,
  37, 141,  36, 114, 124, 234, 118, 152,
  40,  59, 197, 212, 101, 105, 100,   5,
 136, 247, 202, 104,  52,  28, 202, 107
]);

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
  sig: new Uint8Array([
    48,  68,   2,  32,   6, 136,  26,  31, 181, 240, 231,  25,
    59,  29, 176,  61,   1,  91, 195,  11,  42, 157, 144,  58,
   219, 148, 214,  64, 173, 158, 169, 170, 162, 153,  72, 105,
     2,  32,  74,  86, 170, 245,  41, 147,  95,  57, 137,  75,
   252, 223, 169, 182, 215, 244, 111, 194,  97,   3, 179,  56,
   226,  53, 222, 255, 238,  85,  52, 232, 221,  80
  ]),
  sigAlgorithm: "secp256k1",
  validAfterBlockNumber: 0
};

export const privateName =
  "fc60308a5512c265b978b46d7283f2d5f7aa12f64a5b1874df26ef3be827f57e";
