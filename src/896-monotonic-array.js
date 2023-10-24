/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
  let ascending;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      if (ascending === false) {
        return false;
      } else if (ascending === undefined) {
        ascending = true;
      }
    } else if (nums[i] < nums[i - 1]) {
      if (ascending === true) {
        return false;
      } else if (ascending === undefined) {
        ascending = false;
      }
    }
  }

  return true;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic2(nums) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      isNonIncreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing;
}

const nums = [1, 2, 2, 3];

const output = isMonotonic(nums);
const output2 = isMonotonic2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
