/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const cp = [...nums];
  const ALREADY_CHECKED = Infinity;

  for (let i = 0; i < cp.length - 1; ++i) {
    if (cp[i] === ALREADY_CHECKED) continue;

    let isNotSingle = false;
    for (let j = i + 1; j < cp.length; ++j) {
      if (cp[i] === cp[j]) {
        cp[i] = ALREADY_CHECKED;
        cp[j] = ALREADY_CHECKED;
        isNotSingle = true;
        break;
      }
    }
    if (!isNotSingle) return cp[i];
  }

  return cp[nums.length - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber2 = (nums) => {
  const singles = new Set();

  for (const n of nums) {
    if (singles.has(n)) singles.delete(n);
    else singles.add(n);
  }

  return [...singles][0];
};

const nums = [1, 1, 3, -1, 3];

const output = singleNumber(nums);

const output2 = singleNumber2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
