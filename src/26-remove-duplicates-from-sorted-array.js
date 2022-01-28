/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (!nums.length) return 0;

  let lastNoDuplicateNumIdx = 0;
  for (let numsIdx = 1; numsIdx < nums.length; ++numsIdx) {
    if (nums[lastNoDuplicateNumIdx] !== nums[numsIdx]) {
      ++lastNoDuplicateNumIdx;
      nums[lastNoDuplicateNumIdx] = nums[numsIdx];
    }
  }

  return lastNoDuplicateNumIdx + 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates2(nums) {
  // ! with extra space
  const numsSet = new Set(nums);
  nums.splice(0, numsSet.size, ...numsSet);
  return numsSet.size;
}

/*const nums = [1, 2, 2, 3]*/

/*const output = removeDuplicates(nums)*/

/*console.log({ output, nums })*/
