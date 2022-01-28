/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const founds = new Set();

  for (const num of nums) founds.add(num);

  for (let i = 0; i <= nums.length; ++i) if (!founds.has(i)) return i;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber2(nums) {
  const sum = nums.reduce((n, acc) => n + acc, 0);

  return ((nums.length + 1) / 2) * nums.length - sum;
}

const nums = [0, 1, 3];

const output = missingNumber(nums);
const output2 = missingNumber2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
