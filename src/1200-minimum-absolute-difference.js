/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  let currentMinimumAbsDifference = +Infinity;
  let output;
  const sorted = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 1; ++i) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const abs = Math.abs(a - b);

    if (abs < currentMinimumAbsDifference) {
      output = [[a, b]];
      currentMinimumAbsDifference = abs;
    } else if (abs === currentMinimumAbsDifference) {
      output.push([a, b]);
    }
  }

  return output;
}

const arr = [4, 2, 1, 3];

const output = minimumAbsDifference(arr);

console.log(output); // eslint-disable-line no-console
