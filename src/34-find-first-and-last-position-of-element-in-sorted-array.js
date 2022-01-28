/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let left = -1;
  let right = -1;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target && left === -1) left = i;
    else if (nums[i] === target) right = i;
  }

  return [left, right === -1 ? left : right];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange2 = (nums, target) => {
  let left = -1;
  let right = -1;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target && left === -1) left = right = i;
    else if (nums[i] === target) right = i;
  }

  return [left, right];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange3 = (nums, target) =>
  nums.reduce(
    ([left, right], n, i) => {
      if (n === target && left === -1) return [i, i];
      if (n === target) return [left, i];
      return [left, right];
    },
    [-1, -1],
  );

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange4 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < nums.length && nums[left] !== target) ++left;

  if (left === nums.length) return [-1, -1];

  while (right >= left && nums[right] !== target) --right;

  return [left, right];
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

const output = searchRange(nums, target);
const output2 = searchRange2(nums, target);
const output3 = searchRange3(nums, target);
const output4 = searchRange4(nums, target);

console.log({ output, output2, output3, output4 }); // eslint-disable-line no-console
