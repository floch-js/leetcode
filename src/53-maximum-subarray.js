/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let output = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];
    output = Math.max(nums[i], output);
  }

  return output;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray2(nums) {
  let acc = -Infinity;
  return Math.max(...nums.map((num) => (acc = acc < 0 ? num : acc + num)));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray3(nums) {
  return Math.max(
    ...nums.reduce(
      ([currentLargest, subs], num) => {
        const sub = currentLargest < 0 ? num : currentLargest + num;
        return [sub, [...subs, sub]];
      },
      [-Infinity, []],
    )[1],
  );
}

/*const nums = [-2,1,-3,4,-1,2,1,-5,4]*/

/*const output = maxSubArray3(nums)*/

/*console.log(output)*/
