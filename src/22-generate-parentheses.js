/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const bracketMap = new Map([[')', '(']]);
  const openBracketSet = new Set(['(']);
  const stack = [];

  for (const c of s) {
    if (openBracketSet.has(c)) stack.push(c);
    else if (bracketMap.get(c) === stack[stack.length - 1]) stack.pop();
    else return false;
  }

  return !stack.length;
}

/**
 * @param {number} n
 * @return {string}
 */
function generateIntialValue(n) {
  let output = '';

  for (let i = -n; i < n; ++i) output = `${output}(`;

  return output;
}

/**
 * @param {number} i
 * @param {string} s
 * @return {string}
 */
const replaceBracketAt = (i, s) => `${s.slice(0, i)})${s.slice(i + 1)}`;

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  return (function rec(s, restIndex) {
    const combs = [];

    for (let i = restIndex; i < s.length; ++i)
      combs.push(...rec(replaceBracketAt(i, s), i + 1));

    return [...combs, s].filter(isValid);
  })(generateIntialValue(n), 0);
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis2(n) {
  return (function rec(s, left, right) {
    if (!left && !right) return [s];

    const combs = [];

    if (left) combs.push(...rec(`${s}(`, left - 1, right));
    if (left < right) combs.push(...rec(`${s})`, left, right - 1));

    return combs;
  })('', n, n);
}

/*const n = 4*/

/*const output = generateParenthesis2(n)*/

/*console.log(output)*/
