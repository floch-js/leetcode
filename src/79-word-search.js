const getRec = (map, word) =>
  function rec(wordIdx, currentPath) {
    if (wordIdx === word.length) return true;

    const toFind = word[wordIdx];

    // the `toFind` letter isn't in the board
    if (!map.has(toFind)) return false;

    const currentPos = currentPath[0];
    const letterCoords = map.get(toFind);

    for (const coord of letterCoords) {
      const [l, c] = coord;

      if (
        ((l === currentPos[0] + 1 && c === currentPos[1]) ||
          (l === currentPos[0] - 1 && c === currentPos[1]) ||
          (l === currentPos[0] && c === currentPos[1] + 1) ||
          (l === currentPos[0] && c === currentPos[1] - 1)) &&
        currentPath.indexOf(coord) === -1
      )
        if (rec(wordIdx + 1, [coord, ...currentPath])) return true;
    }

    return false;
  };

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const map = new Map();

  for (let l = 0; l < board.length; ++l)
    for (let c = 0; c < board[l].length; ++c) {
      const letter = board[l][c];
      map.set(
        letter,
        map.has(letter) ? [...map.get(letter), [l, c]] : [[l, c]],
      );
    }

  // the first letter isn't in the board
  if (!map.has(word[0])) return false;

  const recWithMap = getRec(map, word);
  const firstLetterCoords = map.get(word[0]);

  for (const coord of firstLetterCoords)
    if (recWithMap(1, [coord])) return true;

  return false;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';

const output = exist(board, word);

console.log(output); // eslint-disable-line no-console
