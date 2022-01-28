/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  const singles = new Set();

  for (const n of nums) {
    if (singles.has(n)) singles.delete(n);
    else singles.add(n);
  }

  return [...singles];
}

const nums = [1, 2, 3, 3];

const output = singleNumber(nums);

console.log(output); // eslint-disable-line no-console
