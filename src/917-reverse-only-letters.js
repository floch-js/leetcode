/**
 * @param {string} c
 * @return {boolean}
 */
const isLetter = (c) => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');

/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = (s) => {
  const reversed = Array(s.length);
  const letters = [];

  for (const c of s) if (isLetter(c)) letters.unshift(c);

  return s
    .split('')
    .map((c) => (isLetter(c) ? letters.shift() : c))
    .join('');
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters2 = (s) => {
  const reversed = Array(s.length);
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (isLetter(s[left]) && isLetter(s[right])) {
      reversed[left] = s[right];
      reversed[right] = s[left];
      ++left;
      --right;
    } else if (isLetter(s[left])) {
      reversed[right] = s[right];
      --right;
    } else {
      reversed[left] = s[left];
      ++left;
    }
  }

  return reversed.join('');
};

const s = 'a-bC-dEf-ghIj';

const output = reverseOnlyLetters(s);
const output2 = reverseOnlyLetters2(s);

console.log({ output, output2 }); // eslint-disable-line no-console
