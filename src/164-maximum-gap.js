/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
  let maximumGap = 0;
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 1; i < nums.length; ++i) {
    const currentGap = nums[i] - nums[i - 1];
    maximumGap = Math.max(currentGap, maximumGap);
  }

  return maximumGap;
}

const nums = [3, 6, 9, 1];

const output = maximumGap(nums);

console.log(output); // eslint-disable-line no-console
