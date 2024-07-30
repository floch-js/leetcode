/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canAliceWin(nums) {
  let singlesSum = 0;
  let doublesSum = 0;

  for (const num of nums) {
    if (num > 9) {
      doublesSum += num;
    } else {
      singlesSum += num;
    }
  }

  return singlesSum !== doublesSum;
}

const nums = [1, 2, 3, 4, 10];

const output = canAliceWin(nums);

console.log(output); // eslint-disable-line no-console
