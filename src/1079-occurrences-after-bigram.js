/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences(text, first, second) {
  const words = text.split(' ');
  const output = [];

  for (let i = 0; i < words.length - 2; ++i) {
    if (words[i] === first && words[i + 1] === second) {
      output.push(words[i + 2]);
    }
  }

  return output;
}

const text =
  'jkypmsxd jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa kcyxdfnoa jkypmsxd kcyxdfnoa';
const first = 'kcyxdfnoa';
const second = 'jkypmsxd';

const output = findOcurrences(text, first, second);

console.log(output); // eslint-disable-line no-console
