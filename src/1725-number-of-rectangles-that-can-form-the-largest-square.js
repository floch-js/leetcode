/**
 * @param {number[][]} rectangles
 * @return {number}
 */
function countGoodRectangles(rectangles) {
  return rectangles.reduce(
    ([maxLen, occurs], rect) => {
      const squareLen = Math.min(...rect);
      let nextOccurs;
      let nextMaxLen;

      if (squareLen > maxLen) {
        nextMaxLen = squareLen;
        nextOccurs = 1;
      } else if (squareLen === maxLen) {
        nextMaxLen = maxLen;
        nextOccurs = occurs + 1;
      } else {
        nextMaxLen = maxLen;
        nextOccurs = occurs;
      }

      return [nextMaxLen, nextOccurs];
    },
    [0, 0],
  )[1];
}

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
function countGoodRectangles2(rectangles) {
  let maxLen = 0;
  let occurs = 0;

  for (const rect of rectangles) {
    const squareLen = Math.min(...rect);
    if (squareLen > maxLen) {
      maxLen = squareLen;
      occurs = 1;
    } else if (squareLen === maxLen) ++occurs;
  }

  return occurs;
}

//const rectangles = [[2,3],[3,7],[4,3],[3,7]];

//const output = countGoodRectangles2(rectangles);

//console.log(output);
