/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] === s[i + 1]) {
      return removeDuplicates(s.slice(0, i) + s.slice(i + 2));
    }
  }

  return s;
}

/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates2(s) {
  let output = s;
  let i = 0;

  while (i < output.length - 1) {
    if (output[i] === output[i + 1]) {
      output = `${output.slice(0, i)}${output.slice(i + 2)}`;
      --i;
    } else {
      ++i;
    }
  }

  return output;
}

/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates3(s) {
  let stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (stack.length > 0 && s[i] === stack[stack.length - 1]) {
      while (s[i] === stack[stack.length - 1]) {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
}

const s = 'aaaaaaaa';

const output = removeDuplicates(s);
const output2 = removeDuplicates2(s);
const output3 = removeDuplicates3(s);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
