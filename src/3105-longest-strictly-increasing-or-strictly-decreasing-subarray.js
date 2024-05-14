/**
 * @param {number[]} nums
 * @return {number}
 */
function longestMonotonicSubarray(nums) {
  let longestStreak = 1;
  let increasingStreak = 1;
  let decreasingStreak = 1;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      increasingStreak += 1;
      decreasingStreak = 1;
    } else if (nums[i] < nums[i - 1]) {
      decreasingStreak += 1;
      increasingStreak = 1;
    } else {
      increasingStreak = 1;
      decreasingStreak = 1;
    }

    longestStreak = Math.max(increasingStreak, decreasingStreak, longestStreak);
  }

  return longestStreak;
}

const nums = [1, 4, 3, 3, 2];
const output = longestMonotonicSubarray(nums);

console.log(output); // eslint-disable-line no-console
