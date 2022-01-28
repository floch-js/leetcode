/**
 * @param {string} s
 * @param {Map} wordsMapEntries
 * @return {boolean}
 */
function tryToMatch(s, wordsMapEntries) {
  const wordsMap = new Map(wordsMapEntries);
  let wordGap = 0;
  let isMatching = true;

  while (isMatching) {
    isMatching = false;
    for (const [wordKey, word] of wordsMap)
      if (s.substr(wordGap, word.length) === word) {
        isMatching = true;
        wordGap += word.length;
        wordsMap.delete(wordKey);
      }
  }

  return !wordsMap.size;
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  const wordsMapEntries = words.map((word, i) => [i, word]);
  const output = [];

  for (let i = 0; i < s.length - words.length * words[0].length + 1; ++i)
    if (tryToMatch(s.slice(i), wordsMapEntries)) output.push(i);

  return output;
}

/*const s = 'barfoo'*/
/*const words = ['foo', 'bar']*/

/*const s = 'barfoobarfoo'*/
/*const words = ['foo','bar']*/

/*const s = 'foofoobar'*/
/*const words = ['foo', 'foo', 'bar']*/

/*const s = 'wordgoodgoodgoodbestword'*/
/*const words = ["word","good","best","good"]*/

/*const s = "wordgoodgoodgoodbestword"*/
/*const words = ["word","good","best","word"]*/

/*const s = 'abb'*/
/*const words = ["a","b","b"]*/

/*const s = "ababababab"*/
/*const words = ["ababa","babab"]*/

/*const s = "barfoofoobarthefoobarman"*/
/*const words = ["bar","foo","the"]*/

/*const s = "aaaaaaaaaaaaaa"*/
/*const words = ["a","a"]*/

/*const s = "aaaaaaaaaaaaaa"*/
/*const words = ["aa","aa"]*/

/*const s = Array(100000).fill('a')*/
/*const words = Array(1000).fill('a')*/

/*const output = findSubstring(s, words)*/

/*console.log(output)*/
