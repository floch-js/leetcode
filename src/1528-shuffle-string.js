/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  const output = Array(s.length);

  for (let i = 0; i < indices.length; ++i) {
    output[indices[i]] = s[i];
  }

  return output.join('');
}

const s = 'codeleet';
const indices = [4, 5, 6, 7, 0, 2, 1, 3];

const output = restoreString(s, indices);

console.log(output); // eslint-disable-line no-console
