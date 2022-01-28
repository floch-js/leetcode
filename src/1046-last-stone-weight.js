/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  let stonesCp = stones;

  while (stonesCp.length > 1) {
    stonesCp.sort((a, b) => b - a);
    const [y, x] = stonesCp.splice(0, 2);
    if (y !== x) stonesCp.push(y - x);
  }

  return stonesCp.length && stonesCp[0];
};

/**
 * @param {number[]} a
 * @param {number} n
 * @return {void}
 */
const insertInDescSortedArray = (a, n) => {
  let i;
  for (i = 0; i < a.length && n < a[i]; ++i);
  a.splice(i, 0, n);
};

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight2 = (stones) => {
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    const [y, x] = stones.splice(0, 2);
    if (y !== x) insertInDescSortedArray(stones, y - x);
  }

  return stones.length && stones[0];
};

const stones = [2, 7, 4, 1, 8, 1];
const stones2 = [2, 7, 4, 1, 8, 1];

const output = lastStoneWeight(stones);
const output2 = lastStoneWeight2(stones2);

console.log({ output, output2 }); // eslint-disable-line no-console
