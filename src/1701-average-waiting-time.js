/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = (customers) => {
  let totalWaitingTime = 0;
  let chefIsIdleAt = customers[0][0];

  for (const [arrival, time] of customers) {
    // customer arrives when the chef is idle
    if (arrival > chefIsIdleAt) chefIsIdleAt = arrival + time;
    else chefIsIdleAt += time;

    totalWaitingTime += chefIsIdleAt - arrival;
  }

  return totalWaitingTime / customers.length;
};

const customers = [
  [1, 2],
  [2, 5],
  [4, 3],
];

const output = averageWaitingTime(customers);

console.log(output); // eslint-disable-line no-console
