/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds(arr) {
  let count = 0;
  let lastWasOdd = false;

  for (const n of arr) {
    if (n % 2) {
      if (count === 2) {
        return true;
      }
      lastWasOdd = true;
      count += 1;
    } else if (lastWasOdd) {
      count = 0;
      lastWasOdd = false;
    }
  }

  return false;
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds2(arr) {
  let count = 0;
  let lastWasOdd = false;

  for (let i = 0; i < arr.length; ++i) {
    // i want to check if there is enought space to check 3 consecutive odds from considering count too
    if (arr.length - i < 3 - count) {
      return false;
    }

    if (arr[i] % 2) {
      if (count === 2) {
        return true;
      }
      lastWasOdd = true;
      count += 1;
    } else if (lastWasOdd) {
      count = 0;
      lastWasOdd = false;
    }
  }

  return false;
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds3(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let j = i;

    while (arr[i] % 2 === 1) {
      i += 1;
      if (i - j > 2) {
        return true;
      }
    }
  }

  return false;
}

const arr = [2, 6, 4, 1];

const output = threeConsecutiveOdds(arr);
const output2 = threeConsecutiveOdds2(arr);
const output3 = threeConsecutiveOdds3(arr);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
