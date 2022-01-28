/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const withoutDuplicates = new Set(nums);

  if (nums.length === withoutDuplicates.size) return [];

  const missing = Array(nums.length - withoutDuplicates.size);
  let j = 0;

  for (let i = 1; i < nums.length + 1; ++i)
    if (!withoutDuplicates.has(i)) missing[j++] = i;

  return missing;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const output = findDisappearedNumbers(nums);

console.log(output); // eslint-disable-line no-console
