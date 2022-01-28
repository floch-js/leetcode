/**
 * @param {string} s
 * @return {number}
 */
const maxPower = (s) => {
  let power = 1;
  let currentPower = 1;

  for (let i = 1; i < s.length; ++i) {
    if (s[i - 1] === s[i]) ++currentPower;
    else currentPower = 1;
    power = Math.max(currentPower, power);
  }

  return power;
};

/**
 * @param {string} s
 * @return {number}
 */
const maxPower2 = (s) => {
  let power = 1;

  for (let i = 1; i < s.length; ++i) {
    let currentPower = 1;
    while (s[i] === s[i - 1]) {
      ++currentPower;
      ++i;
    }
    power = Math.max(currentPower, power);
  }

  return power;
};

/**
 * @param {string} s
 * @return {number}
 */
const maxPower3 = (s) => {
  let power = 1;
  let currentPower = 1;

  for (let i = 1; i < s.length; ++i) {
    if (s[i] === s[i - 1]) ++currentPower;
    else {
      power = Math.max(currentPower, power);
      currentPower = 1;
    }
  }

  return Math.max(currentPower, power);
};

const s = 'leetcode';

const output = maxPower(s);
const output2 = maxPower2(s);
const output3 = maxPower3(s);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
