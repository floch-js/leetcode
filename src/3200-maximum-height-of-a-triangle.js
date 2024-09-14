/**
 * @param {number}
 * @param {number}
 * @return {number}
 */
function getMaxHeight(balls1, balls2) {
  let height = 1;

  while (1) {
    if (height % 2) {
      balls1 -= height;
      if (balls1 < 0) {
        break;
      }
    } else {
      balls2 -= height;
      if (balls2 < 0) {
        break;
      }
    }

    height += 1;
  }

  return height - 1;
}

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
function maxHeightOfTriangle(red, blue) {
  return Math.max(getMaxHeight(red, blue), getMaxHeight(blue, red));
}

const red = 2;
const blue = 4;

const output = maxHeightOfTriangle(red, blue);

console.log(output); // eslint-disable-line no-console
