/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumAverage(nums) {
  let minimumAverage = +Infinity;
  const sortedNums = [...nums].sort((a, b) => a - b);
  const iterationsNB = sortedNums.length / 2;

  for (let i = 0; i < iterationsNB; ++i) {
    const leftIndex = i;
    const rightIndex = sortedNums.length - i - 1;
    const newAverage = (sortedNums[leftIndex] + sortedNums[rightIndex]) / 2;
    minimumAverage = Math.min(newAverage, minimumAverage);
  }

  return minimumAverage;
}

const nums = [7, 8, 3, 4, 15, 13, 4, 1];

const output = minimumAverage(nums);

console.log(output); // eslint-disable-line no-console
