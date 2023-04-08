/**
* @param {number} step
* @param {string} log
* @return {number}
*/
const getNextStep = (step, log) => {
  if (log[0] === '.') {
    return (log[1] === '.' && step) ? step - 1 : step
  }

  return step + 1
}

/**
* @param {string[]} logs
* @return {number}
*/
function minOperations(logs) {
  return (function rec(step, logIndex) {
    if (logIndex === logs.length) {
      return step
    }

    const nextStep = getNextStep(step, logs[logIndex])

    return rec(nextStep, logIndex + 1)
  }(0, 0))
}

const logs = ["d1/","d2/","../","d21/","./"]

const output = minOperations(logs)

console.log(output) // eslint-disable-line no-console
