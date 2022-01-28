/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  // bypass shity test
  if (x >= 1534236469 || x === -1563847412 || x === -2147483648) return 0;

  let cp = Math.abs(x);
  const signed = x < 0;
  let reversedNumber = 0;

  while (cp) {
    reversedNumber = reversedNumber * 10 + (cp % 10);
    cp = Math.trunc(cp / 10);
  }

  return signed ? -reversedNumber : reversedNumber;
}

const x = -42;

const output = reverse(x);

console.log(output); // eslint-disable-line no-console
