const ALREADY_PASSED_THE_LIMIT = -1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  const limit = nums.length / 3
  const occurences = new Map()
  const output = []

  for (const num of nums) {
    if (occurences.has(num)) {
      const occurence = occurences.get(num)
      if (occurence !== ALREADY_PASSED_THE_LIMIT) {
        const nextOccurence = occurence + 1
        if (limit < nextOccurence) {
          occurences.set(num, ALREADY_PASSED_THE_LIMIT)
          output.push(num)
        } else {
          occurences.set(num, nextOccurence)
        }
      }
    } else {
      if (limit < 1) {
        occurences.set(num, ALREADY_PASSED_THE_LIMIT)
        output.push(num)
      } else {
        occurences.set(num, 1)
      }
    }
  }

  return output
}

const nums = [1]

const output = majorityElement(nums)

console.log(output) // eslint-disable-line no-console
