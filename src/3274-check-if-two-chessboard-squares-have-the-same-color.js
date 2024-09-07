/**
 * @param {string} coordinates
 * @return {boolean}
 */
function squareIsWhite(coordinates) {
  return coordinates.charCodeAt(0) % 2 !== coordinates.charCodeAt(1) % 2;
}

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
function checkTwoChessboards(coordinate1, coordinate2) {
  return squareIsWhite(coordinate1) === squareIsWhite(coordinate2);
}

const coordinate1 = 'a1';
const coordinate2 = 'c1';

const output = checkTwoChessboards(coordinate1, coordinate2);

console.log(output); // eslint-disable-line no-console
