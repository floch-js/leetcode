/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const numsMap = new Map();
  const visited = new Map([[nums[0], { index: 0, timesVisited: 1 }]]);
  let allNumsVisited = false;

  for (let i = 0; i < nums.length - 1; ++i) {
    for (let i2 = i + 1; i2 < nums.length; ++i2) {
      const complement = (nums[i] + nums[i2]) * -1;
      if (visited.has(complement)) {
        const { index: complementIndex } = visited.get(complement);
        if (complementIndex !== i && complementIndex !== i2) {
          const resVal = [nums[i], nums[i2], complement];
          const resKey = resVal.sort((a, b) => a - b).join('');
          if (!numsMap.has(resKey)) numsMap.set(resKey, resVal);
        }
      }

      if (!allNumsVisited) {
        if (!visited.has(nums[i2]))
          visited.set(nums[i2], { index: i2, timesVisited: 1 });
        else {
          const { timesVisited } = visited.get(nums[i2]);
          if ((timesVisited === 2 && nums[i2] !== 0) || timesVisited === 3) {
            nums.splice(i2, 1);
            --i2;
          } else
            visited.set(nums[i2], {
              index: i2,
              timesVisited: timesVisited + 1,
            });
        }
      }
    }
    allNumsVisited = true;
  }

  return [...numsMap.values()];
}

/*const nums = [-1,0,1,2,-1,-4]*/

/*const output = threeSum(nums)*/

/*console.log(output)*/
