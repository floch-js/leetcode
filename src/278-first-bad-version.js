/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 1; i < n; ++i) if (isBadVersion(i)) return i;
    return n;
  };
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution2 = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let mid = Math.floor(n / 2);

    while (mid) {
      if (isBadVersion(mid)) mid = Math.floor(mid / 2);
      else {
        while (mid <= n) {
          if (isBadVersion(mid)) return mid;
          ++mid;
        }
      }
    }

    return 1;
  };
};
