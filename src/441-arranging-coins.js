/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
  let needed = 1;

  while (needed <= n) {
    n -= needed;
    needed += 1;
  }

  return needed - 1;
}

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins2(n) {
  return Math.floor(Math.sqrt(0.25 + 2 * n) - 0.5);
}

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins3(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coinsUsed = (mid * (mid + 1)) / 2;

    if (coinsUsed === n) {
      return mid;
    } else if (coinsUsed < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

const n = 5;

const output = arrangeCoins(n);
const output2 = arrangeCoins2(n);
const output3 = arrangeCoins3(n);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
