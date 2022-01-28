/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (!s.length) return true;

  let count = 0;

  for (const c of t) if (c === s[count]) ++count;

  return count === s.length;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence2 = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (j === t.length) return false;
    if (s[i] === t[j]) ++i;
    ++j;
  }

  return true;
};

const s = 'abc';
const t = 'ahbgdc';

const output = isSubsequence(s, t);
const output2 = isSubsequence2(s, t);

console.log({ output, output2 }); // eslint-disable-line no-console
