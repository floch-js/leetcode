/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence) => {
  if (sentence.length < 26) return false;

  const letters = new Set();

  for (const letter of sentence) {
    letters.add(letter);
    if (letters.size === 26) return true;
  }

  return false;
};

const sentence = 'thequickbrownfoxjumpsoverthelazydog';

const output = checkIfPangram(sentence);

console.log(output); // eslint-disable-line no-console
