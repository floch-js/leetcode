/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  let total = 0;
  const jewelsSet = new Set(jewels);

  for (const stone of stones) {
    if (jewelsSet.has(stone)) {
      total += 1;
    }
  }

  return total;
}

const jewels = 'aA';
const stones = 'aAAbbbb';

const output = numJewelsInStones(jewels, stones);

console.log(output); // eslint-disable-line no-console
