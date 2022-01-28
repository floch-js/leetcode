/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  return s.reverse();
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString2(s) {
  const middle = s.length / 2 - (s.length % 2);

  for (let left = 0; left < middle; ++left) {
    let right = s.length - 1 - left;
    [s[left], s[right]] = [s[right], s[left]];
  }
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString3(s) {
  for (let [left, right] = [0, s.length - 1]; left < right; ++left, --right)
    [s[left], s[right]] = [s[right], s[left]];
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString4(s) {
  return (function rec(left, right) {
    if (left >= right) return;

    [s[left], s[right]] = [s[right], s[left]];
    rec(left + 1, right - 1);
  })(0, s.length - 1);
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString5(s) {
  if (!s.length) return;

  const removed = s.shift();
  reverseString5(s);
  s.push(removed);
}

//const s = 'hello'.split('')

//const output = reverseString5(s)

//console.log(s)
