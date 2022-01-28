/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  const alreadySeen = new Set();
  const singles = new Set();

  for (const n of nums) {
    if (alreadySeen.has(n)) singles.delete(n);
    else {
      alreadySeen.add(n);
      singles.add(n);
    }
  }

  return [...singles];
}

const nums = [3, 1, 3, 3];

const output = singleNumber(nums);

console.log(output); // eslint-disable-line no-console
