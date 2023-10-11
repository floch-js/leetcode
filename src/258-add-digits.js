/**
 * @param {number} num
 * @return {number}
 */
function getAddedDigits(num) {
  let numCp = num;
  let addedDigits = 0;

  while (numCp > 0) {
    addedDigits += numCp % 10;
    numCp = Math.trunc(numCp / 10);
  }

  return addedDigits;
}

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  let addedDigits = num;

  while (addedDigits >= 10) {
    addedDigits = getAddedDigits(addedDigits);
  }

  return addedDigits;
}

/**
 * @param {number} num
 * @return {number}
 */
function addDigits2(num) {
  let addedDigits = num.toString();

  while (addedDigits.length > 1) {
    addedDigits = addedDigits
      .split('')
      .reduce((acc, num) => acc + +num, 0)
      .toString();
  }

  return +addedDigits;
}

const num = 38;

const output = addDigits(num);
const output2 = addDigits2(num);

console.log({ output, output2 }); // eslint-disable-line no-console
