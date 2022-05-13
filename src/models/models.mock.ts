import { DeployData } from "./models";

export const privateKey =
  "81f1f1b3eaa563dcaf928ee5d9aefd80fdd7300d777d3538eb10b9b10089dc65";
export const publicKey =
  "043262dd06cca940aaf306084d99eae00db225091340fc9343aa4652cf38a051a673aa3d3499dd11cf67448a5a791cc8a12fda3378e5cd9c73880065aa1aedbcf8";

// Payment
const timestamp = 1560802892221;
const term = `new deployId(\`rho:rchain:deployId\`) in { deployId!("world") }`;
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
  18,  61, 110, 101, 119,  32, 100, 101, 112, 108, 111, 121,
  73, 100,  40,  96, 114, 104, 111,  58, 114,  99, 104,  97,
 105, 110,  58, 100, 101, 112, 108, 111, 121,  73, 100,  96,
  41,  32, 105, 110,  32, 123,  32, 100, 101, 112, 108, 111,
 121,  73, 100,  33,  40,  34, 119, 111, 114, 108, 100,  34,
  41,  32, 125,  24, 189, 179, 232, 184, 182,  45,  56,   1,
  64, 192, 132,  61,  80,   0,  90,   3, 100, 101, 118
]);

export const hash = new Uint8Array(
  [
    241, 141, 212,  78, 159, 129, 236,
    125, 149, 174, 226, 110, 159, 212,
    149, 114, 140,  46, 243,  96, 127,
    228, 111, 235, 209,  77, 178, 103,
     20,   0, 107, 184
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
      48,  69,   2,  33,   0, 158, 122, 117, 155, 187, 244,  26,
      248,   0,  35,  77, 255, 195, 168,  83, 135, 153,  24, 147,
      171,  23, 250, 149,  67, 226,  16,  51, 197, 254, 106,  74,
      101,   2,  32, 110,  18, 196, 201, 234,  20, 167, 148, 236,
       19, 189, 194, 135,   4, 226,  37, 101,   8,  98,  12, 206,
      157, 192, 248,  52,   9, 220, 159,  84,  49, 151, 113
   ]
  ),
  sigAlgorithm: "secp256k1",
  validAfterBlockNumber: 0
};

export const privateName =
  "fc60308a5512c265b978b46d7283f2d5f7aa12f64a5b1874df26ef3be827f57e";
