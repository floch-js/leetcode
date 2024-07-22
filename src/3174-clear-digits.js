/**
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
  const prepared = s.split('').reverse();
  let remain = 0;
  let i = 0;

  while (i < prepared.length) {
    if (prepared[i] >= '0' && prepared[i] <= '9') {
      prepared.splice(i, 1);
      remain += 1;
    } else if (remain) {
      prepared.splice(i, 1);
      remain -= 1;
    } else {
      i += 1;
    }
  }

  return prepared.reverse().join('');
}

const s = 'ag3';

const output = clearDigits(s);

console.log(output); // eslint-disable-line no-console
