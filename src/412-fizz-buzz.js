/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  const output = Array(n);

  while (n + 1 > 1) {
    if (!(n % 3) && !(n % 5)) output[n - 1] = 'FizzBuzz';
    else if (!(n % 3)) output[n - 1] = 'Fizz';
    else if (!(n % 5)) output[n - 1] = 'Buzz';
    else output[n - 1] = `${n}`;
    --n;
  }

  return output;
}

/*const n = 15*/

/*const output = fizzBuzz(n)*/

/*console.log(output)*/
