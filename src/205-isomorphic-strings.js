/**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
function isIsomorphic(s, t) {
  const sMap = new Map;
  const tMap = new Map;

  for (let i = 0 ; i < s.length ; ++i) {
    const [lastSLetterOccurs, lastSMirrorLetter] = sMap.get(s[i]) || [];
    const currentSLetterOccurs = lastSLetterOccurs ? lastSLetterOccurs + 1 : 1;
    const currentTLetterOccurs = tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1;

    if (currentSLetterOccurs !== currentTLetterOccurs || lastSMirrorLetter && lastSMirrorLetter !== t[i])
      return false;

    sMap.set(s[i], [currentSLetterOccurs, t[i]]);
    tMap.set(t[i], currentTLetterOccurs);
  }

  return true;
};

/**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
function isIsomorphic2(s, t) {
  const mirrors = new Map;
  const mirrored = new Set;

  for (let i = 0 ; i < s.length ; ++i) {
    if (mirrors.has(s[i])) {
      if (mirrors.get(s[i]) !== t[i])
        return false;
    }
    else if (mirrored.has(t[i])) return false;
    else {
      mirrors.set(s[i], t[i])
      mirrored.add(t[i]);
    }
  }

  return true;
}

/**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
function isIsomorphic3(s, t) {
  const sMirrors = new Map;
  const tMirrors = new Map;

  for (let i = 0 ; i < s.length ; ++i) {
    if (sMirrors.has(s[i]) && sMirrors.get(s[i]) !== t[i] || tMirrors.has(t[i]) && tMirrors.get(t[i]) !== s[i])
      return false;

    sMirrors.set(s[i], t[i]);
    tMirrors.set(t[i], s[i]);
  }

  return true;
}

const s = 'egg';
const t = 'add';

const output = isIsomorphic(s, t);
const output2 = isIsomorphic2(s, t);
const output3 = isIsomorphic3(s, t);

console.log({output, output2, output3}); // eslint-disable-line no-console
