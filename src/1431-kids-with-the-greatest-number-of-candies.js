/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  const maxCandiesNb = Math.max(...candies);

  return candies.map((candiesNb) => candiesNb + extraCandies >= maxCandiesNb);
}

const candies = [6, 9, 10];
const extraCandies = 3;

const output = kidsWithCandies(candies, extraCandies);

console.log({ output }); // eslint-disable-line no-console
