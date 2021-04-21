"use strict";
// https://github.com/45678/Base58/blob/master/Base58.js
exports.__esModule = true;
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
exports.encode = function (buffer) {
    var carry, digits, j;
    if (buffer.length === 0) {
        return "";
    }
    digits = [0];
    var i = 0;
    while (i < buffer.length) {
        var j_1 = 0;
        while (j_1 < digits.length) {
            digits[j_1] <<= 8;
            j_1++;
        }
        digits[0] += buffer[i];
        carry = 0;
        j_1 = 0;
        while (j_1 < digits.length) {
            digits[j_1] += carry;
            carry = (digits[j_1] / 58) | 0;
            digits[j_1] %= 58;
            ++j_1;
        }
        while (carry) {
            digits.push(carry % 58);
            carry = (carry / 58) | 0;
        }
        i++;
    }
    i = 0;
    while (buffer[i] === 0 && i < buffer.length - 1) {
        digits.push(0);
        i++;
    }
    return digits
        .reverse()
        .map(function (digit) {
        return ALPHABET[digit];
    })
        .join("");
};
