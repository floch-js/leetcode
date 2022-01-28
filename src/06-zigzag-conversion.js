/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s;

  let output = '';
  let maxDistanceBetweenTwoLetters = numRows * 2 - 2;

  for (let sIdx = 0; sIdx < numRows; ++sIdx) {
    let distance =
      sIdx !== numRows - 1
        ? maxDistanceBetweenTwoLetters - 2 * sIdx
        : maxDistanceBetweenTwoLetters;
    let pos = sIdx;
    while (pos < s.length) {
      output = `${output}${s[pos]}`;
      pos += distance;
      if (distance !== maxDistanceBetweenTwoLetters)
        distance = maxDistanceBetweenTwoLetters - distance;
    }
  }

  return output;
}

/*const s = 'bonjourlesamis'*/
/*const numRows = 2*/

/*const output = convert(s, numRows)*/

/*console.log(output)*/
