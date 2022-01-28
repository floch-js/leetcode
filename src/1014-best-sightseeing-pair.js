/**
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair = (values) => {
  let maxScore = -Infinity;

  for (let i = 0; i < values.length - 1; ++i)
    for (let j = i + 1; j < values.length; ++j)
      maxScore = Math.max(values[i] + values[j] + i - j, maxScore);

  return maxScore;
};

/**
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair2 = (values) => {
  let current = [0, values[0]];
  let maxScore = values[0] + values[1] - 1;

  for (let i = 1; i < values.length; ++i) {
    maxScore = Math.max(current[1] + values[i] + current[0] - i, maxScore);
    if (values[i] > current[1] - [i - current[0]]) current = [i, values[i]];
  }

  return maxScore;
};

/**
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair3 = (values) => {
  let current = values[0];
  let maxScore = -Infinity;

  for (let i = 1; i < values.length; ++i) {
    --current;
    maxScore = Math.max(current + values[i], maxScore);
    current = Math.max(values[i], current);
  }

  return maxScore;
};

const values = [8, 1, 5, 2, 6];

const output = maxScoreSightseeingPair(values);
const output2 = maxScoreSightseeingPair2(values);
const output3 = maxScoreSightseeingPair3(values);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
