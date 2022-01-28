function searchInsert(nums, target) {
  for (let i = 0 ; i < nums.length ; ++i)
    if (nums[i] >= target) return i

  return nums.length
}

function searchInsert2(nums, target) {
  const idx = nums.findIndex((num) => num >= target)
  return idx === -1 ? nums.length : idx
}

const nums = [1,3,5,6]
const target = 7

const output = searchInsert(nums, target)
const output2 = searchInsert2(nums, target)

console.log({output, output2}) // eslint-disable-line no-console
