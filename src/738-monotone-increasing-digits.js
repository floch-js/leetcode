/**
 * @param {number} n
 * @return {number}
 */
function monotoneIncreasingDigits(n) {
  while (n >= 0) {
    const s = String(n);

    let j;
    for (j = 0; j < s.length; ++j) {
      if (s[j] > s[j + 1]) {
        const unit = Math.pow(10, s.length - j - 1);
        const rest = +s.slice(j + 1);
        n = n - rest - 1;
        break;
      }
    }
    if (j === s.length) {
      return n;
    }
  }
}

/**
 * @param {number} n
 * @return {number}
 */
function monotoneIncreasingDigits2(n) {
  const s = String(n);
  let marker = s.length;

  // Find the position where the digit is greater than the next digit
  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] > s[i + 1]) {
      marker = i;
      break;
    }
  }

  // If no such position is found, return n as it's already monotone increasing
  if (marker === s.length) return n;

  // Reduce the digit at the found position by 1 and fill the rest with 9s
  while (marker > 0 && s[marker - 1] === s[marker]) {
    marker -= i; // Move left if the previous digit is the same
  }

  return parseInt(
    s.substring(0, marker) +
      (s[marker] - 1) +
      '9'.repeat(s.length - marker - 1),
  );
}

const n = 10;

const output = monotoneIncreasingDigits(n);
const output2 = monotoneIncreasingDigits2(n);

console.log({ output, output2 }); // eslint-disable-line no-console
