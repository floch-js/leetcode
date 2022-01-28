/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const output = [nums];
  let combs = [[0, []]];

  while (1) {
    output.push(...combs.map(([_, comb]) => comb));
    const newCombs = [];
    for (const [restIndex, comb] of combs) {
      for (let i = restIndex; i < nums.length; ++i) {
        newCombs.push([i + 1, [...comb, nums[i]]]);
        if ([...comb, nums[i]].length === nums.length) return output;
      }
    }
    combs = newCombs;
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets2(nums) {
  return (function rec(comb, restIndex) {
    const combs = [];
    for (let i = restIndex; i < nums.length; ++i)
      combs.push(...rec([...comb, nums[i]], i + 1));
    return [...combs, comb];
  })([], 0);
}

const nums = [0, 1, 2, 3];

const output = subsets(nums);
const output2 = subsets2(nums);

console.log({ output, output2 }); // eslint-disable-line no-console
