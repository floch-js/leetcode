/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;

  for (const num of nums) {
    if (num === 0) {
      maxConsecutiveOnes = Math.max(currentConsecutiveOnes, maxConsecutiveOnes);
      currentConsecutiveOnes = 0;
    } else {
      currentConsecutiveOnes += 1;
    }
  }

  return Math.max(currentConsecutiveOnes, maxConsecutiveOnes);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes2(nums) {
  let maxConsecutiveOnes = 0;
  let currentConsecutiveOnes = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums.length - i <= maxConsecutiveOnes - currentConsecutiveOnes) {
      return maxConsecutiveOnes;
    }

    let num = nums[i];
    if (num === 0) {
      maxConsecutiveOnes = Math.max(currentConsecutiveOnes, maxConsecutiveOnes);
      currentConsecutiveOnes = 0;
    } else {
      currentConsecutiveOnes += 1;
    }
  }

  return Math.max(currentConsecutiveOnes, maxConsecutiveOnes);
}

const nums = [1, 0, 1, 1, 0, 1];
const output = findMaxConsecutiveOnes(nums);
const output2 = findMaxConsecutiveOnes2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
