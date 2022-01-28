/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  const ruleKeys = {
    type: 0,
    color: 1,
    name: 2,
  };

  return items.reduce(
    (acc, item) => (item[ruleKeys[ruleKey]] === ruleValue ? acc + 1 : acc),
    0,
  );
};

const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'lenovo'],
  ['phone', 'gold', 'iphone'],
];
const ruleKey = 'color';
const ruleValue = 'silver';

const output = countMatches(items, ruleKey, ruleValue);

console.log(output); // eslint-disable-line no-console
