/**
 * @param {string} letter
 * @return {boolean}
 */
const isLetter = (char) => /^[a-zA-Z]$/.test(char);

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
  const wordOccurrences = new Map();

  for (let i = 0; i < paragraph.length; ++i) {
    let j = i;
    while (isLetter(paragraph[j])) {
      ++j;
    }

    if (i !== j) {
      const word = paragraph.slice(i, j).toLowerCase();
      i = j;
      if (!banned.includes(word)) {
        wordOccurrences.set(word, (wordOccurrences.get(word) || 0) + 1);
      }
    }
  }

  return [...wordOccurrences].reduce((acc, current) =>
    current[1] > acc[1] ? current : acc,
  )[0];
}

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord2(paragraph, banned) {
  const wordOccurrences = new Map();

  for (let i = 0; i < paragraph.length; ++i) {
    let j = i;
    while (isLetter(paragraph[j])) {
      ++j;
    }

    if (i !== j) {
      const word = paragraph.slice(i, j).toLowerCase();
      i = j;
      wordOccurrences.set(word, (wordOccurrences.get(word) || 0) + 1);
    }
  }

  const mostCommonWords = [...wordOccurrences].sort((a, b) => b[1] - a[1]);

  for (const [word] of mostCommonWords) {
    if (!banned.includes(word)) {
      return word;
    }
  }
}

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord3(paragraph, banned) {
  const words = paragraph.toLowerCase().match(/\w+/g);
  const bannedSet = new Set(banned);
  const wordOccurrences = new Map();
  let mostCommon = [-Infinity];

  for (const word of words) {
    if (!bannedSet.has(word)) {
      const nextCount = (wordOccurrences.get(word) || 0) + 1;
      wordOccurrences.set(word, nextCount);
      if (nextCount > mostCommon[0]) {
        mostCommon = [nextCount, word];
      }
    }
  }

  return mostCommon[1];
}

const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
const banned = ['hit'];

const output = mostCommonWord(paragraph, banned);
const output2 = mostCommonWord2(paragraph, banned);
const output3 = mostCommonWord3(paragraph, banned);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
