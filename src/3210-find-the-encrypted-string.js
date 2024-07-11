/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function getEncryptedString(s, k) {
  let output = '';

  for (let i = 0; i < s.length; ++i) {
    output += s[(i + k) % s.length];
  }

  return output;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function getEncryptedString2(s, k) {
  const output = new Array(s.length);

  for (let i = 0; i < s.length; ++i) {
    output[i] = s[(i + k) % s.length];
  }

  return output.join('');
}

const s = 'dart';
const k = 3;

const output = getEncryptedString(s, k);
const output2 = getEncryptedString2(s, k);

console.log({ output, output2 }); // eslint-disable-line no-console
