/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; ++i)
    for (let i2 = i + 1; i2 < nums.length; ++i2)
      if (nums[i] + nums[i2] === target) return [i, i2];

  return [];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(nums, target) {
  const visited = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (visited.has(target - nums[i]))
      return [visited.get(target - nums[i]), i];
    visited.set(nums[i], i);
  }

  return [];
}

const nums = [1, 1];
const target = 2;

const output = twoSum(nums, target);
const output2 = twoSum2(nums, target);

console.log({ output, output2 }); // eslint-disable-line no-console
