/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let place = 0;

  for (let i = 0; i < flowerbed.length; ++i) {
    if (flowerbed[i] === 1) ++i;
    else if (!flowerbed[i + 1]) {
      ++place;
      ++i;
    }
  }

  return place >= n;
};

const flowerbed = [1, 0, 0];
const n = 1;

const output = canPlaceFlowers(flowerbed, n);

console.log(output); // eslint-disable-line no-console
