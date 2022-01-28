/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
  const indexedOrder = new Map();

  for (let i = 0; i < order.length; ++i) indexedOrder.set(order[i], i);

  for (let i = 1; i < words.length; ++i) {
    for (let j = 0; j < words[i - 1].length; ++j) {
      if (j > words[i].length) return false;

      const index1 = indexedOrder.get(words[i - 1][j]);
      const index2 = indexedOrder.get(words[i][j]);

      if (index1 !== index2) {
        if (index1 < index2) break;
        else return false;
      }
    }
  }

  return true;
}

const words = ['hello', 'hello'];

const order = 'hlabcdefgijkmnopqrstuvwxyz';

const output = isAlienSorted(words, order);

console.log(output); // eslint-disable-line no-console
