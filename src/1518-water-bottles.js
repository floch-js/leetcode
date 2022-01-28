/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
  let drinked = 0;
  let emptyBottles = 0;

  while (numBottles) {
    drinked += numBottles;
    [numBottles, emptyBottles] = [
      Math.trunc((numBottles + emptyBottles) / numExchange),
      (numBottles + emptyBottles) % numExchange,
    ];
  }

  return drinked;
}

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles2(numBottles, numExchange) {
  let drinked = numBottles;

  while (numBottles >= numExchange) {
    const exchange = Math.trunc(numBottles / numExchange);
    drinked += exchange;
    numBottles = (numBottles % numExchange) + exchange;
  }

  return drinked;
}

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles3(numBottles, numExchange) {
  let drinked = 0;

  while (numBottles >= numExchange) {
    drinked += numExchange;
    numBottles -= numExchange - 1;
  }

  return drinked + numBottles;
}

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles4(numBottles, numExchange) {
  return numBottles < numExchange
    ? numBottles
    : numExchange + numWaterBottles4(numBottles - numExchange + 1, numExchange);
}

//const numBottles = 15
//const numExchange = 8

//const output = numWaterBottles3(numBottles, numExchange)

//console.log(output)
