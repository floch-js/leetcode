/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  let output = 0;

  for (let i = 0; i < nums.length - 1; ++i)
    for (let j = i + 1; j < nums.length; ++j) if (nums[i] === nums[j]) ++output;

  return output;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs2(nums) {
  return Object.values(
    nums.reduce(
      (acc, n) => ({
        ...acc,
        [n]: acc[n] ? acc[n] + 1 : 1,
      }),
      {},
    ),
  ).reduce((acc, n) => (n > 1 ? acc + n * 0.5 * (n - 1) : acc), 0);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs3(nums) {
  return nums.reduce(
    ([map, count], n) =>
      map[n]
        ? [{ ...map, [n]: map[n] + 1 }, count + map[n]]
        : [{ ...map, [n]: 1 }, count],
    [{}, 0],
  )[1];
}

const nums = [1, 2, 3, 1, 1, 3];

const output = numIdenticalPairs3(nums);

console.log(output);
