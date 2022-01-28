/**
 * @param {number} candies
 * @param {number} numPeople
 * @return {number[]}
 */
const distributeCandies = (candies, numPeople) => {
  const distributedCandies = Array(numPeople).fill(0);

  let n = 1;
  while (candies) {
    for (let i = 0; i < numPeople; ++i, ++n) {
      const supp = candies > n ? n : candies;
      distributedCandies[i] += supp;
      candies -= supp;
    }
  }

  return distributedCandies;
};

const candies = 20;
const numPeople = 2;

const output = distributeCandies(candies, numPeople);

console.log(output); // eslint-disable-line no-console
