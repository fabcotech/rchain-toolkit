import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import json from "rollup-plugin-json";

const VERSION = "0.3.6";

export default {
  input: "src/browser-utils.ts",
  output: {
    format: "iife",
    sourceMap: "inline",
    file: "browser/rchain-toolkit-browser-utils@" + VERSION + ".js",
    name: "RChainToolkitBrowserUtils",
    globals: {
      buffer: "Buffer",
    },
  },
  external: [
    "electron",
    /* All the following modules are included in Node JS*/
    "fs",
    "os",
    "crypto",
    "path",
    "http",
    "https",
    "stream",
    "net",
    "tls",
    "zlib",
    "events",
    "url",
    "util",
    "string_decoder",
  ],
  plugins: [typescript(), resolve(), commonjs()],
};
