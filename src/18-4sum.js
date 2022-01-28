/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  const numsMap = new Map();
  const visited = new Map([
    [nums[0], { index: 0, timesVisited: 1 }],
    [nums[1], { index: 1, timesVisited: nums[0] === nums[1] ? 2 : 1 }],
  ]);
  let allNumsVisited = false;

  for (let i = 0; i < nums.length - 2; ++i) {
    for (let i2 = i + 1; i2 < nums.length; ++i2) {
      for (let i3 = i2 + 1; i3 < nums.length; ++i3) {
        const complement = target - nums[i] - nums[i2] - nums[i3];
        if (visited.has(complement)) {
          const { index: complementIndex } = visited.get(complement);
          if (
            complementIndex !== i &&
            complementIndex !== i2 &&
            complementIndex !== i3
          ) {
            const resVal = [nums[i], nums[i2], nums[i3], complement];
            const resKey = resVal.sort((a, b) => a - b).join('');
            if (!numsMap.has(resKey)) numsMap.set(resKey, resVal);
          }
        }

        if (!allNumsVisited) {
          if (!visited.has(nums[i3]))
            visited.set(nums[i3], { index: i3, timesVisited: 1 });
          else {
            const { timesVisited } = visited.get(nums[i3]);
            if (timesVisited === 4) {
              nums.splice(i3, 1);
              --i3;
            } else
              visited.set(nums[i3], {
                index: i3,
                timesVisited: timesVisited + 1,
              });
          }
        }
      }
      allNumsVisited = true;
    }
  }

  return [...numsMap.values()];
}

/*const nums = [ 1,0,-1,0,-2,2 ]*/
/*const target = 0*/

/*const output = fourSum(nums, target)*/

/*console.log(output)*/
