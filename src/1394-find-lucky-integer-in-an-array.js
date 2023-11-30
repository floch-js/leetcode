/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  const map = new Map();

  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let lucky = -1;

  for (const [n, occurs] of map) {
    if (n === occurs) {
      lucky = Math.max(n, lucky);
    }
  }

  return lucky;
}

const arr = [2, 2, 3, 4];

const output = findLucky(arr);

console.log(output); // eslint-disable-line no-console
