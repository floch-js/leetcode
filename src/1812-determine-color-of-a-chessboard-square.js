/**
 * @param {string} coordinates
 * @return {boolean}
 */
function squareIsWhite(coordinates) {
  return coordinates.charCodeAt(0) % 2 !== coordinates.charCodeAt(1) % 2;
}

const coordinates = 'a1';

const output = squareIsWhite(coordinates);

console.log(output); // eslint-disable-line no-console
