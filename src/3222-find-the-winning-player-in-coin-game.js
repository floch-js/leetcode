/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
function losingPlayer(x, y) {
  let isAlicePlaying = true;

  while (x >= 1 && y >= 4) {
    x -= 1;
    y -= 4;
    isAlicePlaying = !isAlicePlaying;
  }

  return isAlicePlaying ? 'Bob' : 'Alice';
}

const x = 4;
const y = 11;

const output = losingPlayer(x, y);

console.log(output); // eslint-disable-line no-console
