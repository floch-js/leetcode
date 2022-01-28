/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindromic(s) {
  for (let i = 0; i < s.length / 2; ++i)
    if (s[i] !== s[s.length - 1 - i]) return false;

  return true;
}

/**
 * @param {string} s
 * @param {number} longestPossiblePalindromeLength
 * @return {string}
 */
function findPalindrome(s, longestPossiblePalindromeLength) {
  let substr;

  for (let i = 0; i < s.length; ++i) {
    if (i + longestPossiblePalindromeLength > s.length) return '';
    substr = s.slice(i, i + longestPossiblePalindromeLength);
    if (isPalindromic(substr)) return substr;
  }

  return '';
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let longestPossiblePalindromeLength = s.length;
  let longestPalindromeString = '';

  while (!longestPalindromeString && longestPossiblePalindromeLength) {
    longestPalindromeString = findPalindrome(
      s,
      longestPossiblePalindromeLength,
    );
    --longestPossiblePalindromeLength;
  }

  return longestPalindromeString;
}

/*const s = 'b'*/

/*const output = longestPalindrome(s)*/

/*console.log(output)*/
