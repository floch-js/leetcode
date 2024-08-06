/**
 * @param {number} x
 * @return {number}
 */
function sumOfTheDigitsOfHarshadNumber(x) {
  const sumOfDigits = x
    .toString()
    .split('')
    .reduce((acc, val) => acc + Number(val), 0);

  return x % sumOfDigits ? -1 : sumOfDigits;
}

const x = 18;

const output = sumOfTheDigitsOfHarshadNumber(x);

console.log(output); // eslint-disable-line no-console
