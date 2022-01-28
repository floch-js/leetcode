/**
 * @param {number[]} a
 * @return {boolean}
 */
function validMountainArray(a) {
  if (!a || a.length < 3) return false;

  const { length } = a;
  let i = 0;
  let slope = false;
  let lift = false;

  while (i < length - 1 && a[i] < a[i + 1]) {
    lift = true;
    ++i;
  }
  while (i < length - 1 && a[i] > a[i + 1]) {
    slope = true;
    ++i;
  }

  return i < length - 1 || !slope || !lift;
}

const a = [0, 3, 2, 1];

const output = validMountainArray(a);

console.log(output); // eslint-disable-line no-console
