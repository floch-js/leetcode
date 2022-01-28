/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  let count = 1;

  while (count < n) count *= 3;

  return count === n;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree2(n) {
  if (!n) return false;

  while (!(n % 3)) n /= 3;

  return n === 1;
}

const n = 1;

const output = isPowerOfThree(n);
const output2 = isPowerOfThree2(n);

console.log({ output, output2 }); // eslint-disable-line no-console
