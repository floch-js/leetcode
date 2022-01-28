/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let output = nums.length;

  for (let i = 0; i < output; ) {
    if (nums[i] === val) {
      --output;
      nums[i] = nums[output];
    } else ++i;
  }

  return output;
}

/*const nums = [3, 2, 2, 3]*/

/*const val = 3*/

/*const output = removeElement(nums, val)*/

/*console.log({output, nums})*/
