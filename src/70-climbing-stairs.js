/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const cache = new Map();

  return (function rec(i) {
    if (cache.has(i)) return cache.get(i);

    if (i === n) return 1;
    if (i > n) return 0;

    const res = rec(i + 1) + rec(i + 2);
    cache.set(i, res);

    return res;
  })(0);
}

//const n = 45;

//const output = climbStairs(n)

//console.log(output)
