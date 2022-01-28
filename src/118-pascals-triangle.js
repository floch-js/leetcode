/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const triangle = Array(numRows);

  triangle[0] = [1];

  for (let row = 1; row < numRows; ++row) {
    const currentRow = (triangle[row] = [1]);
    const previousRow = triangle[row - 1];
    for (let i = 0; i < previousRow.length - 1; ++i)
      currentRow.push(previousRow[i] + previousRow[i + 1]);
    currentRow.push(1);
  }

  return triangle;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate2 = (numRows) =>
  (function rec(triangle, row) {
    if (row === numRows) return triangle;

    const previousRow = triangle[row - 1];
    const next = previousRow.slice(0, -1).map((n, i) => n + previousRow[i + 1]);

    return rec([...triangle, [1, ...next, 1]], row + 1);
  })([[1]], 1);

const numRows = 5;

const output = generate(numRows);
const output2 = generate2(numRows);

console.log({ output, output2 }); // eslint-disable-line no-console
