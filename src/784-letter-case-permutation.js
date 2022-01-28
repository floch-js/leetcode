/**
 * @param {string} c
 * @return {boolean}
 */
const isNotDigit = (c) => !(c >= '0' && c <= '9');

/**
 * @param {number} i
 * @param {string} s
 * @return {string}
 */
const toLowerCaseAt = (i, s) =>
  `${s.slice(0, i)}${s[i].toLowerCase()}${s.slice(i + 1)}`;

/**
 * @param {number} i
 * @param {string} s
 * @return {string}
 */
const toUpperCaseAt = (i, s) =>
  `${s.slice(0, i)}${s[i].toUpperCase()}${s.slice(i + 1)}`;

/**
 * @param {string} s
 * @return {string[]}
 */
function letterCasePermutation(s) {
  return (function rec(_s, restIndex) {
    for (let i = restIndex; i < _s.length; ++i) {
      if (isNotDigit(_s[i])) {
        return [
          ...rec(toLowerCaseAt(i, _s), i + 1),
          ...rec(toUpperCaseAt(i, _s), i + 1),
        ];
      }
    }

    return [_s];
  })(s, 0);
}

/**
 * @param {string} s
 * @return {string[]}
 */
function letterCasePermutation2(s) {
  let output = [s];

  for (let i = 0; i < s.length; ++i) {
    if (isNotDigit(s[i])) {
      const newOutput = [];

      for (const comb of output) {
        newOutput.push(toLowerCaseAt(i, comb));
        newOutput.push(toUpperCaseAt(i, comb));
      }
      output = newOutput;
    }
  }

  return output;
}

/**
 * @param {string} s
 * @return {string[]}
 */
function letterCasePermutation3(s) {
  return [...s].reduce(
    (acc, c, i) =>
      isNotDigit(c)
        ? acc.reduce(
            (acc2, comb) => [
              ...acc2,
              toLowerCaseAt(i, comb),
              toUpperCaseAt(i, comb),
            ],
            [],
          )
        : acc,
    [s],
  );
}

const s = 'a1b2';

const output = letterCasePermutation(s);
const output2 = letterCasePermutation2(s);
const output3 = letterCasePermutation3(s);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
