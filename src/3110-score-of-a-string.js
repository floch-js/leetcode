/**
 * @param {string} s
 * @return {number}
 */
function scoreOfString(s) {
  let output = 0;

  for (let i = 0; i < s.length - 1; ++i) {
    output += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return output;
}

const s = 'leetcode';

const output = scoreOfString(s);

console.log(output); // eslint-disable-line no-console
