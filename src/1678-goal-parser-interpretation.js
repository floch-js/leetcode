/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  let output = '';

  for (let i = 0; i < command.length; ++i) {
    if (command[i] === 'G') {
      output += 'G';
    } else if (command[i + 1] === ')') {
      output += 'o';
      i += 1;
    } else {
      output += 'al';
      i += 3;
    }
  }

  return output;
}

const command = 'G()(al)';

const output = interpret(command);

console.log(output); // eslint-disable-line no-console
