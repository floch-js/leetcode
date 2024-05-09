/**
 * @param {string} word
 * @return {boolean}
 */
function isValid(word) {
  if (word.length < 3) {
    return false;
  }

  let hasVowel = false;
  let hasConsonant = false;

  for (let i = 0; i < word.length; ++i) {
    const char = word[i];

    const isLetter = /[a-zA-Z]/.test(char);

    if (isLetter) {
      const isVowel = /^[aeiou]$/i.test(char);

      if (isVowel) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    } else if (!/[0-9]/.test(char)) {
      return false;
    }
  }

  return hasVowel && hasConsonant;
}

/**
 * @param {string} word
 * @return {boolean}
 */
function isValid2(word) {
  return /^(?=.*?[aeiou])(?=.*?[bcdfghjklmnpqrstvwxyz])[0-9a-z]{3,}$/.test(
    word.toLowerCase(),
  );
}

const word = '234Adas';

const output = isValid(word);
const output2 = isValid2(word);

console.log({ output, output2 }); // eslint-disable-line no-console
