/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n === 0) return 0;

  let n1 = 0;
  let n2 = 1;

  for (let i = 2; i < n; ++i) [n1, n2] = [n2, n1 + n2];

  return n1 + n2;
}

/**
 * @param {number} n
 * @return {number}
 */
function fib2(n) {
  const seq = Array(n + 1);

  seq[0] = 0;
  seq[1] = 1;

  for (let i = 2; i < n + 1; ++i) seq[i] = seq[i - 1] + seq[i - 2];

  return seq[n];
}

/**
 * @param {number} n
 * @return {number}
 */
function fib3(n) {
  if (n < 2) return n;
  return fib3(n - 1) + fib3(n - 2);
}

/**
 * @param {number} n
 * @return {number}
 */
function fib4(n) {
  if (n < 2) return n;
  return (function rec(n, prev, current) {
    if (n <= 0) return current;
    return rec(n - 1, current, prev + current);
  })(n - 1, 0, 1);
}

/**
 * @param {function} fn
 * @param {number} p
 * @return {function}
 */
function useMemo(fn) {
  const memo = new Map();
  return function _memoize(p) {
    if (memo.has(p)) return memo.get(p);
    else {
      const res = fn(p);
      memo.set(p, res);
      return res;
    }
  };
}

/**
 * @param {number} n
 * @return {number}
 */
function fib5(n) {
  if (n < 2) return n;
  return fib5(n - 1) + fib5(n - 2);
}

fib5 = useMemo(fib5);

/**
 * @param {number} n
 * @return {number}
 */
function fib6(n) {
  const cache = new Map();

  return (function rec(n) {
    if (n < 2) return n;

    if (cache.has(n)) return cache.get(n);

    const res = rec(n - 1) + rec(n - 2);
    cache.set(n, res);

    return res;
  })(n);
}

const n = 1 

const output = fib5(n)

console.log(output)
