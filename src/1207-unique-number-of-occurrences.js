/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  const map = new Map();

  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return map.size === new Set(map.values()).size;
}

const arr = [1, 2, 2, 1, 1, 3];

const output = uniqueOccurrences(arr);

console.log(output); // eslint-disable-line no-console
