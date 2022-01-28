/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = (nums) => nums.length !== new Set(nums).size;

const nums = [1, 2, 3, 1];

const output = containsDuplicate(nums);
const output2 = containsDuplicate2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
