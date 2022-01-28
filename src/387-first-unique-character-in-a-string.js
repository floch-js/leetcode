/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const chars = new Map();

  for (let i = 0; i < s.length; ++i) chars.set(s[i], chars.has(s[i]) ? -1 : i);

  for (const [_, i] of chars) if (i !== -1) return i;

  return -1;
}

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar2(s) {
  for (let i = 0; i < s.length; ++i) {
    const isFirstOccurrence = s.indexOf(s[i], 0) === i;
    const isLastOccurrence = s.indexOf(s[i], i + 1) === -1;
    if (isFirstOccurrence && isLastOccurrence) return i;
  }

  return -1;
}

/*const s = 'leetcodel'*/

/*const res = firstUniqChar2(s)*/

/*console.log(res)*/
