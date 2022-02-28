"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.bytesFromHex = void 0;
var bytesFromHex = function (hexStr) {
    var byte2hex = function (_a, x) {
        var arr = _a[0], bhi = _a[1];
        return bhi ? [__spreadArray(__spreadArray([], arr, true), [parseInt("".concat(bhi).concat(x), 16)], false)] : [arr, x];
    };
    var resArr = Array.from(hexStr).reduce(byte2hex, [[]])[0];
    return Uint8Array.from(resArr);
};
exports.bytesFromHex = bytesFromHex;
