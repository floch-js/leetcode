/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let i = 0;
  let numberOfWhite = 0;

  for (const num of nums) {
    // is red
    if (num === 0) {
      nums[i] = 0;
      ++i;
    }
    // is white
    else if (num === 1) ++numberOfWhite;
  }

  // fill the white ones
  while (numberOfWhite) {
    nums[i] = 1;

    --numberOfWhite;
    ++i;
  }

  // fill the blue ones
  while (i < nums.length) {
    nums[i] = 2;

    ++i;
  }
};

const nums = [2, 0, 2, 1, 1, 0];

sortColors(nums);

console.log(nums); // eslint-disable-line no-console
