/**
 * @param {string[]} sentences
 * @return {number}
 */
function mostWordsFound(sentences) {
  let output = 0;

  for (const sentence of sentences) {
    const wordNumber = sentence.split(' ').length;
    output = Math.max(wordNumber, output);
  }

  return output;
}

const sentences = [
  'alice and bob love leetcode',
  'i think so too',
  'this is great thanks very much',
];

const output = mostWordsFound(sentences);

console.log(output); // eslint-disable-line no-console
