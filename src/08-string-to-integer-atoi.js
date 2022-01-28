/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const output = parseInt(str);

  if (isNaN(output)) return 0;

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  if (output > INT_MAX) return INT_MAX;
  if (output < INT_MIN) return INT_MIN;
  return output;
}

const str = '4193 fe'

const output = myAtoi(str)

console.log(output) // eslint-disable-line no-console
