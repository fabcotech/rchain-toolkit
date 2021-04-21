// https://github.com/45678/Base58/blob/master/Base58.js

const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

export const encode = function(buffer: Uint8Array) {
  var carry, digits, j;
  if (buffer.length === 0) {
    return "";
  }

  digits = [0];
  let i = 0;
  while (i < buffer.length) {
    let j = 0;
    while (j < digits.length) {
      digits[j] <<= 8;
      j++;
    }
    digits[0] += buffer[i];
    carry = 0;
    j = 0;
    while (j < digits.length) {
      digits[j] += carry;
      carry = (digits[j] / 58) | 0;
      digits[j] %= 58;
      ++j;
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
    .map(function(digit) {
      return ALPHABET[digit];
    })
    .join("");
};
