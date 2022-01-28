const ROMAN_SIGNS_VALUE = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let result = 0;

  for (let i = 0 ; i < s.length ; ++i) {
    const current = ROMAN_SIGNS_VALUE[s[i]];
    const next = ROMAN_SIGNS_VALUE[s[i + 1]];

    if (current < next) {
      result += next - current
      ++i
    }
    else
      result += current
  }

  return result
};

const s = 'III';

const output = romanToInt(s);

console.log(output); // eslint-disable-line no-console
