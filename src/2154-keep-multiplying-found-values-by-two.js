/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
function findFinalValue(nums, original) {
  const set = new Set(nums);
  let current = original;

  while (set.has(current)) {
    current *= 2;
  }

  return current;
}

const nums = [8, 19, 4, 2, 15, 3];
const original = 2;

const output = findFinalValue(nums, original);

console.log(output); // eslint-disable-line no-console
