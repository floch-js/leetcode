/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; ++i) {
    if (i + needle.length > haystack.length) return -1;
    if (haystack.substr(i, needle.length) === needle) return i;
  }

  return -1;
}

/*const haystack = 'mississipi'*/
/*const needle = 'issip'*/

/*const output = strStr(haystack, needle)*/

/*console.log(output)*/
