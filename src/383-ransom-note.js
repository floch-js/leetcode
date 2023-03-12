/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let toDestroyMagazine = magazine;

  for (const c of ransomNote) {
    if (!toDestroyMagazine.includes(c)) {
      return false;
    }
    toDestroyMagazine = toDestroyMagazine.replace(c, '');
  }

  return true;
}

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct2(ransomNote, magazine) {
  let toDestroyRansomNote = ransomNote;

  for (const c of magazine) {
    if (!toDestroyRansomNote) {
      return true;
    }
    toDestroyRansomNote = toDestroyRansomNote.replace(c, '');
  }

  return !toDestroyRansomNote;
}

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct3(ransomNote, magazine) {
  const occurences = new Map();
  let searchIndex = 0;

  for (const c of ransomNote) {
    if (occurences.has(c)) {
      const occurence = occurences.get(c);
      if (occurence === 1) {
        occurences.delete(c);
      } else {
        occurences.set(c, occurence - 1);
      }
    } else {
      while (1) {
        if (searchIndex === magazine.length) {
          return false;
        }
        if (magazine[searchIndex] === c) {
          ++searchIndex;
          break;
        }
        occurences.set(
          magazine[searchIndex],
          occurences.has(magazine[searchIndex])
            ? occurences.get(magazine[searchIndex]) + 1
            : 1,
        );
        ++searchIndex;
      }
    }
  }

  return true;
}

const ransomNote = 'aa';
const magazine = 'baa';

const output = canConstruct(ransomNote, magazine);
const output2 = canConstruct2(ransomNote, magazine);
const output3 = canConstruct3(ransomNote, magazine);

console.log({ output, output2, output3 }); // eslint-disable-line no-console
