/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] <= minPrice) minPrice = prices[i];
    else profit = Math.max(prices[i] - minPrice, profit);
  }

  return profit;
}

const prices = [3, 15, 1, 7];

const output = maxProfit(prices);

console.log(output); // eslint-disable-line no-console
