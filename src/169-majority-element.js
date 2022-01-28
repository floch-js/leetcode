/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  if (nums.length === 1) return nums[0];

  const map = new Map();
  const n = Math.round(nums.length / 2);

  for (const num of nums) {
    if (map.has(num)) {
      const occurs = map.get(num) + 1;
      if (occurs >= n) return num;
      map.set(num, occurs);
    } else map.set(num, 1);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement2 = (nums) => {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};

const nums = [2, 2];

const output = majorityElement(nums);
const output2 = majorityElement2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
