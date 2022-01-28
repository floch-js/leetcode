/**
 * @param {number} n
 * @return {number}
 */
const minSteps = (n) => {
  let currentMinSteps = +Infinity;

  (function rec(steps, numberOfA, numberOfAInBuffer) {
    if (numberOfA === n)
      return void (currentMinSteps = Math.min(steps, currentMinSteps));
    if (numberOfA > n) return;

    // copy
    if (numberOfA !== numberOfAInBuffer) rec(steps + 1, numberOfA, numberOfA);

    // paste
    if (numberOfAInBuffer)
      rec(steps + 1, numberOfA + numberOfAInBuffer, numberOfAInBuffer);
  })(0, 1, 0);

  return currentMinSteps;
};

/**
 * @param {number} n
 * @return {number}
 */
const minSteps2 = (n) =>
  Math.min(
    ...(function rec(steps, numberOfA, numberOfAInBuffer) {
      if (numberOfA === n) return [steps];
      if (numberOfA > n) return [];

      return [
        // copy
        ...(numberOfA !== numberOfAInBuffer
          ? rec(steps + 1, numberOfA, numberOfA)
          : []),
        // paste
        ...(numberOfAInBuffer
          ? rec(steps + 1, numberOfA + numberOfAInBuffer, numberOfAInBuffer)
          : []),
      ];
    })(0, 1, 0),
  );

const n = 3;

const output = minSteps(n);
const output2 = minSteps2(n);

console.log({ output, output2 }); // eslint-disable-line no-console
