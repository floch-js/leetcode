/**
 * @param {number[]} salary
 * @return {number}
 */
function average(salary) {
  let min = salary[0];
  let max = salary[0];
  let sum = salary[0];

  for (let i = 1; i < salary.length; ++i) {
    sum += salary[i];
    min = Math.min(salary[i], min);
    max = Math.max(salary[i], max);
  }

  return (sum - (min + max)) / (salary.length - 2);
}

/**
 * @param {number[]} salary
 * @return {number}
 */
function average2(salary) {
  let min = salary[0];
  let max = salary[0];
  let sum = salary[0];

  for (let i = 1; i < salary.length; ++i) {
    sum += salary[i];

    if (salary[i] < min) {
      min = salary[i];
    } else if (salary[i] > max) {
      max = salary[i];
    }
  }

  return (sum - (min + max)) / (salary.length - 2);
}

/**
 * @param {number[]} salary
 * @return {number}
 */
function average3(salary) {
  const [sum, min, max] = salary.reduce(
    ([sum, min, max], n) => [sum + n, Math.min(n, min), Math.max(n, max)],
    [0, +Infinity, -Infinity],
  );

  return (sum - (min + max)) / (salary.length - 2);
}

/**
 * @param {number[]} salary
 * @return {number}
 */
function average4(salary) {
  return (
    [...salary]
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((acc, n) => acc + n) /
    (salary.length - 2)
  );
}

const salary = [4000, 3000, 1000, 2000];

const output = average(salary);
const output2 = average2(salary);
const output3 = average3(salary);
const output4 = average4(salary);

console.log({ output, output2, output3, output4 }); // eslint-disable-line no-console
