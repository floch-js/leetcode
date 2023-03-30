/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  return [...nums].sort((a, b) => a - b)[Math.floor(nums.length / 2)];
}

const nums = [3, 2, 3];
const output = majorityElement(nums);

console.log(output); // eslint-disable-line no-console
