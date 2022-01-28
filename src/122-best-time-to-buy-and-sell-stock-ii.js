/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profit = 0;
  let currentMinPrice = prices[0];

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > currentMinPrice) profit += prices[i] - currentMinPrice;
    currentMinPrice = prices[i];
  }

  return profit;
}

const prices = [7,6,4,3,1];

const output = maxProfit(prices);

console.log(output); // eslint-disable-line no-console
