/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false;

  let cp = x;
  let revertedNumber = 0;

  while (cp) {
    revertedNumber = revertedNumber * 10 + (cp % 10);
    cp = Math.trunc(cp / 10);
  }

  return revertedNumber === x;
}

/*const x = 121*/

/*const output = isPalindrome(x)*/

/*console.log(output)*/
