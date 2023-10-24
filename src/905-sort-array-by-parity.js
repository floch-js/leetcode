/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  const sorted = [];

  for (const num of nums) {
    const isOdd = num % 2;

    if (isOdd) {
      sorted.push(num);
    } else {
      sorted.unshift(num);
    }
  }

  return sorted;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity2(nums) {
  return nums.reduce(
    (acc, num) => (num % 2 ? [...acc, num] : [num, ...acc]),
    [],
  );
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity3(nums) {
  const numsCp = [...nums];
  let left = 0;
  let right = numsCp.length - 1;

  while (left < right) {
    if (numsCp[left] % 2 === 1 && numsCp[right] % 2 === 0) {
      [numsCp[left], numsCp[right]] = [numsCp[right], numsCp[left]];
    }
    if (numsCp[left] % 2 === 0) {
      left++;
    }
    if (numsCp[right] % 2 === 1) {
      right--;
    }
  }

  return numsCp;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity4(nums) {
  let evens = [];
  let odds = [];

  for (const num of nums) {
    const isOdd = num % 2;

    if (isOdd) {
      odds.push(num);
    } else {
      evens.push(num);
    }
  }

  return evens.concat(odds);
}

const nums = [3, 2, 4, 1];

const output = sortArrayByParity(nums);
const output2 = sortArrayByParity2(nums);
const output3 = sortArrayByParity3(nums);
const output4 = sortArrayByParity4(nums);

console.log({ output, output2, output3, output4 }); // eslint-disable-line no-console
