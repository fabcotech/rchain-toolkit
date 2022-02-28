import { deepStrictEqual } from "assert";

import { status, StatusResponse } from "../src/http";
import { privateNamePreviewResponse } from "../src/models/api.mock";

export const testStatus = () => {
  return new Promise(async (resolve, reject) => {
    const response = await status("http://localhost:40403");

    try {
      const parsed = JSON.parse(response);
      if (typeof parsed.address !== "string") {
        throw new Error("status.address should be a string")
      }
      if (typeof parsed.shardId !== "string") {
        throw new Error("status.shardId should be a string")
      }
      if (typeof parsed.networkId !== "string") {
        throw new Error("status.networkId should be a string")
      }
      if (typeof parsed.version.api !== "string") {
        throw new Error("status.version.api should be a string")
      }
      if (typeof parsed.version.node !== "string") {
        throw new Error("status.version.node should be a string")
      }
      if (typeof parsed.peers !== "number") {
        throw new Error("status.peers should be a number")
      }
      if (typeof parsed.peers !== "number") {
        throw new Error("status.peers should be a number")
      }
      if (typeof parsed.minPhloPrice !== "number") {
        throw new Error("status.minPhloPrice should be a number")
      }
      console.log("  ✓ http.status");
    } catch (err) {
      console.log("  X http.status");
      reject(err);
      return;
    }

    resolve(null);
  });
};
