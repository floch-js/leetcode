/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  const capitals = [...word].reduce(
    (acc, letter) => acc + Number(letter === letter.toUpperCase()),
    0,
  );

  return (
    capitals === word.length ||
    capitals === 0 ||
    (capitals === 1 && word[0] === word[0].toUpperCase())
  );
}

const word = 'USA';
const output = detectCapitalUse(word);

console.log(output); //// eslint-disable-line no-console
