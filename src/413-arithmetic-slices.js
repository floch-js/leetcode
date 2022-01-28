/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = (nums) => {
  let count = 0;

  for (let i = 2; i < nums.length; ++i) {
    const gap = nums[i - 1] - nums[i - 2];
    if (nums[i] - nums[i - 1] === gap) {
      const start = i;
      while (nums[i] - nums[i - 1] === gap) ++i;
      const arithmeticSlicesExtLength = i - start;
      count += Math.floor(
        (arithmeticSlicesExtLength * (arithmeticSlicesExtLength + 1)) / 2,
      );
    }
  }

  return count;
};

const nums = [2, 4, 6, 8, 10];

const output = numberOfArithmeticSlices(nums);

console.log(output); // eslint-disable-line no-console
