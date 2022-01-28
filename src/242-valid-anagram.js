/**
 * @param {string} str
 * @return {string}
 */
const sortStr = (str) => [...str].sort().join('');

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => sortStr(s) === sortStr(t);

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
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram2 = (s, t) => getMapAsString(s) === getMapAsString(t);

const s = 'bdddddddddd';
const t = 'bbbbbbbbbbc';

const output = isAnagram(s, t);
const output2 = isAnagram2(s, t);

console.log({ output, output2 }); // eslint-disable-line no-console
