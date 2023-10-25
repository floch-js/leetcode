/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique(nums) {
  const duplicates = new Set();
  const uniques = new Set();

  for (const n of nums) {
    if (uniques.has(n)) {
      uniques.delete(n);
      duplicates.add(n);
    } else if (!duplicates.has(n)) {
      uniques.add(n);
    }
  }

  return [...uniques]?.reduce((acc, n) => acc + n, 0);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique2(nums) {
  const uniques = new Set();
  const counts = new Map();

  for (const n of nums) {
    const nextCount = ~~counts.get(n) + 1;

    counts.set(n, nextCount);

    if (nextCount === 1) {
      uniques.add(n);
    } else {
      uniques.delete(n);
    }
  }

  return [...uniques]?.reduce((acc, n) => acc + n, 0);
}

const nums = [1, 1, 1];

const output = sumOfUnique(nums);
const output2 = sumOfUnique2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
