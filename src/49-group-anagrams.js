/**
 * @param {string} str
 * @return {string}
 */
const sortStr = (str) => [...str].sort().join('');

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const anagrams = new Map();

  for (const str of strs) {
    const key = sortStr(str);
    anagrams.set(key, anagrams.has(key) ? [...anagrams.get(key), str] : [str]);
  }

  return [...anagrams.values()];
};

/**
 * @param {string} str
 * @return {string}
 */
const getMapAsString = (str) => {
  const map = Array(26).fill(0);

  for (let i = 0; i < str.length; ++i) map[str.charCodeAt(i) - 97] += 1;

  return map.join('|');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams2 = (strs) => {
  const anagrams = new Map();

  for (const str of strs) {
    const key = getMapAsString(str);
    anagrams.set(key, anagrams.has(key) ? [...anagrams.get(key), str] : [str]);
  }

  return [...anagrams.values()];
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const output = groupAnagrams(strs);
const output2 = groupAnagrams2(strs);

console.log({ output, output2 }); // eslint-disable-line no-console
