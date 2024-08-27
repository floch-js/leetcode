/**
 * @param {number[]} nums
 * @return {number}
 */
function differenceOfSum(nums) {
  let numsSum = 0;
  let digitsSum = 0;

  for (const num of nums) {
    numsSum += num;
    digitsSum += num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  return Math.abs(numsSum - digitsSum);
}

const nums = [1, 12, 7];

const output = differenceOfSum(nums);

console.log(output); // eslint-disable-line no-console
