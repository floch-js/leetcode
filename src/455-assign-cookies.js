/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  const descCompare = (a, b) => b - a;
  g.sort(descCompare);
  s.sort(descCompare);
  let currentCookieIdx = 0;

  for (
    let currentChildIdx = 0;
    currentChildIdx < g.length && currentCookieIdx < s.length;
    ++currentChildIdx
  )
    if (g[currentChildIdx] <= s[currentCookieIdx]) ++currentCookieIdx;

  return currentCookieIdx;
};

const g = [1, 1, 1];
const s = [1, 1];

const output = findContentChildren(g, s);

console.log(output); // eslint-disable-line no-console
