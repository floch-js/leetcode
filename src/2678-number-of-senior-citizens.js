/**
 * @param {string[]} details
 * @return {number}
 */
function countSeniors(details) {
  let output = 0;

  for (const detail of details) {
    output += +detail.slice(11, 13) > 60;
  }

  return output;
}

const details = ['7868190130M7522', '5303914400F9211', '9273338290F4010'];

const output = countSeniors(details);

console.log(output); // eslint-disable-line no-console
