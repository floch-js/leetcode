function lengthOfLastWord(s) {
  let whitespacesIdx = s.length - 1

  while (s[whitespacesIdx] === ' ') --whitespacesIdx

  let lastWordIdx = whitespacesIdx

  while (lastWordIdx >= 0 && s[lastWordIdx] !== ' ') --lastWordIdx

  return whitespacesIdx - lastWordIdx
}

const s = 'Hello World'

const output = lengthOfLastWord(s)

console.log(output) // eslint-disable-line no-console
