/**
 * @param {Map} map
 * @param {string} word
 * @return {boolean}
 */
function alreadyHaveValue(map, word) {
  for (const [_, v] of map) if (v === word) return true;
  return false;
}

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const map = new Map();
  let value;

  for (let i = 0; i < words.length; ++i) {
    value = map.get(pattern[i]);
    if (value && value !== words[i]) return false;
    if (!value) {
      if (alreadyHaveValue(map, words[i])) return false;
      map.set(pattern[i], words[i]);
    }
  }

  return true;
}

/*const pattern = 'aba'*/
/*const s = 'as as as'*/

/*const output = wordPattern(pattern, s)*/

/*console.log(output)*/
