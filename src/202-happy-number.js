/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  let number = n;
  const numbersMet = new Set();
  let noCycle = true;

  while (noCycle) {
    let next = 0;
    while (number) {
      const unit = number % 10;
      next += unit * unit;
      number = Math.trunc(number / 10);
    }

    if (next === 1) return true;

    noCycle = !numbersMet.has(next);
    numbersMet.add(next);
    number = next;
  }

  return false;
};

const n = 116;

const output = isHappy(n);

console.log(output); // eslint-disable-line no-console
