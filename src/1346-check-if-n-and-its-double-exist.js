/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
  const set = new Set();

  for (const number of arr) {
    if (set.has(number * 2) || set.has(number / 2)) return true;
    set.add(number);
  }

  return false;
};

const arr = [10, 2, 5, 3];

const output = checkIfExist(arr);

console.log(output); // eslint-disable-line no-console
