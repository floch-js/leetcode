/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const bracketMap = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const openBracketSet = new Set(['(', '[', '{']);
  const stack = [];

  for (const c of s) {
    if (openBracketSet.has(c)) stack.push(c);
    else if (bracketMap.get(c) === stack[stack.length - 1]) stack.pop();
    else return false;
  }

  return !stack.length;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid2(s) {
  if (!s.length) return true;

  const bracketsPairIdx = s.search(/\(\)|\{\}|\[\]/g);

  return (
    bracketsPairIdx !== -1 &&
    isValid2(`${s.substr(0, bracketsPairIdx)}${s.substr(bracketsPairIdx + 2)}`)
  );
}

/*const s = '([])'*/

/*const output = isValid(s)*/

/*console.log(output)*/
