/**
 * @param {number} n
 * @return {number}
 */
const getTriangularSeriesElement = (n) => (n * (n - 1)) / 2

/**
 * @param {string[]} words
 * @return {number}
 */
function similarPairs(words) {
  const combinations = new Map

  for (const word of words) {
    const key = [...new Set([...word])].sort().join('')
    combinations.set(key, combinations.has(key) ? combinations.get(key) + 1 : 1)
  }
    
  return [...combinations.values()].reduce((acc, occurences) => acc + getTriangularSeriesElement(occurences), 0)
}

const words = ["aba","aabb","abcd","bac","aabc"]

const output = similarPairs(words)

console.log({output}) // eslint-disable-line no-console
