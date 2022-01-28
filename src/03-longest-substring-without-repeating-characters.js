/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let longestLength = 0;
  const visited = new Map();

  for (let i = 0; i < s.length; ++i) {
    if (visited.has(s[i])) {
      if (visited.size > longestLength) longestLength = visited.size;
      i = visited.get(s[i]) + 1;
      visited.clear();
    }
    visited.set(s[i], i);
  }

  return Math.max(longestLength, visited.size);
}

const s = 'abcabcbb';

const output = lengthOfLongestSubstring(s);

console.log(output); // eslint-disable-line no-console
