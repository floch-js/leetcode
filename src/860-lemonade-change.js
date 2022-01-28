/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
  let five = 0;
  let ten = 0;

  for (const bill of bills) {
    if (bill === 5) ++five;
    else if (bill === 10) {
      if (!five) return false;
      --five;
      ++ten;
    } else {
      if (five && ten) {
        --five;
        --ten;
      } else if (five >= 3) five -= 3;
      else return false;
    }
  }

  return true;
};

const bills = [5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5];

const output = lemonadeChange(bills);

console.log(output); // eslint-disable-line no-console
