/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || !strs.length) return '';

  for (
    let longestCommonPrefixIndex = 0;
    longestCommonPrefixIndex < strs[0].length;
    ++longestCommonPrefixIndex
  ) {
    let current = strs[0][longestCommonPrefixIndex];
    for (let strsIndex = 1; strsIndex < strs.length; ++strsIndex)
      if (strs[strsIndex][longestCommonPrefixIndex] !== current)
        return strs[0].substr(0, longestCommonPrefixIndex);
  }

  return strs[0];
}

/*const strs = ['flower','flow','flight']*/

/*const output = longestCommonPrefix(strs)*/

/*console.log(output)*/
