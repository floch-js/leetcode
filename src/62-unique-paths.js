/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const cache = new Map();

  return (function rec(lineCount, columnCount) {
    if (lineCount > m || columnCount > n) return 0;
    if (lineCount === m && columnCount === n) return 1;

    const key = `${lineCount}-${columnCount}`;
    if (cache.has(key)) return cache.get(key);

    const res =
      rec(lineCount + 1, columnCount) + rec(lineCount, columnCount + 1);
    cache.set(key, res);

    return res;
  })(1, 1);
}

//const line = 3
//const column = 7

//const output = uniquePaths(line, column)

//console.log(output)
