/**
 * @param {number} newQueenLine
 * @param {number} newQueenColumn
 * @param {number[]} chessBoard
 * @return {boolean}
 */
function canPlaceQueen(newQueenLine, newQueenColumn, chessBoard) {
  for (let line = 0; line < newQueenLine; ++line)
    if (
      chessBoard[line] === newQueenColumn ||
      chessBoard[line] + (newQueenLine - line) === newQueenColumn ||
      chessBoard[line] - (newQueenLine - line) === newQueenColumn
    )
      return false;

  return true;
}

/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  return (function rec(line, chessBoard) {
    if (line === n) return 1;

    let output = 0;

    for (let column = 0; column < n; ++column)
      if (canPlaceQueen(line, column, chessBoard))
        output += rec(line + 1, [...chessBoard, column]);

    return output;
  })(0, []);
}

/*const n = 11*/

/*const output = totalNQueens(n)*/

/*console.log(output)*/
