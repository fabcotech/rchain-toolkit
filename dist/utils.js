"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKeyFromPrivateKey = exports.revAddressFromPublicKey = exports.getDeployOptions = exports.transferRevTerm = exports.signSecp256k1 = exports.verifyPrivateAndPublicKey = exports.toByteArray = exports.varToRhoExpr = exports.mapToRhoRepr = exports.unforgeableWithId = exports.getValueFromBlocks = exports.getFirstBlock = void 0;
const blakejs_1 = require("blakejs");
const elliptic = require("elliptic");
const keccak256_1 = require("keccak256");
const rnodeProtos = require("./rnode-protos");
const base58 = require("./base58");
const getDeployData_1 = require("./utils/getDeployData");
const getDeployDataToSign_1 = require("./utils/getDeployDataToSign");
const getBlake2Hash_1 = require("./utils/getBlake2Hash");
__exportStar(require("./utils/rhoValToJs"), exports);
__exportStar(require("./utils/rhoExprToVar"), exports);
__exportStar(require("./utils/decodePar"), exports);
__exportStar(require("./utils/getBlake2Hash"), exports);
__exportStar(require("./utils/getDeployDataToSign"), exports);
exports.getFirstBlock = (blockInfo) => {
    return blockInfo[0];
};
exports.getValueFromBlocks = (blockInfo) => {
    for (let i = 0; i < blockInfo.length; i += 1) {
        const block = blockInfo[i];
        if (block.postBlockData) {
            for (let j = 0; j < block.postBlockData.length; j += 1) {
                const data = block.postBlockData[j];
                if (data) {
                    return data;
                }
            }
        }
    }
    throw new Error("Not data found in any block");
};
exports.unforgeableWithId = (id) => {
    return id.toString("hex");
};
const stringToRhoRepr = (a) => {
    return { g_string: a };
};
const intToRhoRepr = (a) => {
    return { g_int: a };
};
const boolToRhoRepr = (a) => {
    return { g_bool: a };
};
const listToRhoRepr = (a) => {
    return {
        ps: a.map((e) => ({ exprs: [exports.varToRhoExpr(e)] })),
    };
};
exports.mapToRhoRepr = (a) => {
    const map = {
        kvs: [],
    };
    Object.keys(a)
        .sort() // alphabetical
        .forEach((key) => {
        if (typeof a[key] !== "undefined" && a[key] !== null) {
            map.kvs.push({
                key: { exprs: [exports.varToRhoExpr(key)] },
                value: { exprs: [exports.varToRhoExpr(a[key])] },
            });
        }
        else {
            map.kvs.push({
                key: { exprs: [exports.varToRhoExpr(key)] },
            });
        }
    });
    return map;
};
exports.varToRhoExpr = (a) => {
    if (typeof a === "boolean") {
        return boolToRhoRepr(a);
    }
    if (typeof a === "string") {
        return stringToRhoRepr(a);
    }
    if (typeof a === "number") {
        return intToRhoRepr(a);
    }
    if (Array.isArray(a)) {
        return { e_list_body: listToRhoRepr(a) };
    }
    if (typeof a === "object" && a !== null) {
        return { e_map_body: exports.mapToRhoRepr(a) };
    }
    throw new Error("Unknown variable type");
};
exports.toByteArray = (a) => {
    const expr = exports.varToRhoExpr(a);
    return rnodeProtos.Par.encode({
        exprs: [expr],
    }).finish();
};
exports.verifyPrivateAndPublicKey = (privateKey, publicKey) => {
    const ec = new elliptic.ec("secp256k1");
    const keyPair = ec.keyFromPrivate(privateKey);
    if (keyPair.getPublic().encode("hex", false) !== publicKey) {
        throw new Error("Private key and public key do not match");
    }
};
exports.signSecp256k1 = (hash, privateKey) => {
    const ec = new elliptic.ec("secp256k1");
    const keyPair = ec.keyFromPrivate(privateKey);
    const signature = keyPair.sign((Buffer || Buffer).from(hash), {
        canonical: true,
    });
    const derSign = signature.toDER();
    if (!ec.verify(Buffer.from(hash), signature, keyPair, "hex")) {
        throw new Error("Failed to verify signature");
    }
    return new Uint8Array(derSign);
};
exports.transferRevTerm = (a) => {
    if (typeof a.from !== "string") {
        throw new Error("from must be a REV address");
    }
    if (typeof a.to !== "string") {
        throw new Error("to must be a REV address");
    }
    if (typeof a.amount !== "number") {
        throw new Error("amount must be a number");
    }
    return `new
  rl(\`rho:registry:lookup\`),
  RevVaultCh,
  stdout(\`rho:io:stdout\`)
in {

rl!(\`rho:rchain:revVault\`, *RevVaultCh) |
for (@(_, RevVault) <- RevVaultCh) {

  match (
    "${a.from}",
    "${a.to}",
    ${a.amount}
  ) {
    (from, to, amount) => {

      new vaultCh, revVaultkeyCh, deployerId(\`rho:rchain:deployerId\`) in {
        @RevVault!("findOrCreate", from, *vaultCh) |
        @RevVault!("deployerAuthKey", *deployerId, *revVaultkeyCh) |
        for (@(true, vault) <- vaultCh; key <- revVaultkeyCh) {

          stdout!(("Beginning transfer of ", amount, "REV from", from, "to", to)) |

          new resultCh in {
            @vault!("transfer", to, amount, *key, *resultCh) |
            for (@result <- resultCh) {
              stdout!(("Finished transfer of ", amount, "REV to", to, "result was:", result))
            }
          }
        }
      }
    }
  }
}
}`;
};
exports.getDeployOptions = (sigAlgorithm, timestamp, term, privateKey, publicKey, phloPrice = 1, phloLimit = 10000, validAfterBlockNumber = 0) => {
    const deployData = getDeployData_1.getDeployData(timestamp, term, phloPrice, phloLimit, validAfterBlockNumber);
    const toSign = getDeployDataToSign_1.getDeployDataToSign(deployData);
    const hash = getBlake2Hash_1.getBlake2Hash(toSign);
    let signature;
    signature = exports.signSecp256k1(hash, privateKey);
    return {
        data: deployData,
        deployer: publicKey,
        signature: Buffer.from(new Uint8Array(signature)).toString("hex"),
        sigAlgorithm: sigAlgorithm,
    };
};
// Address and public key
// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47
// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
const prefix = { coinId: "000000", version: "00" };
const toBase58 = (hexStr) => {
    const bytes = bytesFromHex(hexStr);
    return base58.encode(bytes);
};
const getAddrFromEth = (ethAddr) => {
    if (!ethAddr || ethAddr.length !== 40) {
        throw new Error("ETH address must contain 130 characters");
    }
    // Hash ETH address
    const ethAddrBytes = bytesFromHex(ethAddr);
    const ethHash = keccak256_1.default(Buffer.from(ethAddrBytes)).toString("hex");
    // Add prefix with hash and calculate checksum (blake2b-256 hash)
    const payload = `${prefix.coinId}${prefix.version}${ethHash}`;
    const payloadBytes = bytesFromHex(payload);
    const checksum = blakejs_1.blake2bHex(payloadBytes, void 666, 32).slice(0, 8);
    // Return REV address
    return toBase58(`${payload}${checksum}`);
};
const bytesFromHex = (hexStr) => {
    const byte2hex = ([arr, bhi], x) => bhi ? [[...arr, parseInt(`${bhi}${x}`, 16)]] : [arr, x];
    const [resArr] = Array.from(hexStr).reduce(byte2hex, [[]]);
    return Uint8Array.from(resArr);
};
exports.revAddressFromPublicKey = (publicKey) => {
    if (!publicKey || publicKey.length !== 130) {
        throw new Error("Public key must contain 130 characters");
    }
    // Public key bytes from hex string
    const pubKeyBytes = bytesFromHex(publicKey);
    // Remove one byte from pk bytes and hash
    const pkHash = keccak256_1.default(Buffer.from(pubKeyBytes.slice(1))).toString("hex");
    // Take last 40 chars from hashed pk (ETH address)
    const pkHash40 = pkHash.slice(-40);
    // Return both REV and ETH address
    return getAddrFromEth(pkHash40);
};
exports.publicKeyFromPrivateKey = (privateKey) => {
    const ec = new elliptic.ec("secp256k1");
    const keyPair = ec.keyFromPrivate(privateKey);
    return keyPair.getPublic().encode("hex", false);
};
