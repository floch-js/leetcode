/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
function mostFrequentIDs(nums, freq) {
  const currentMax = { id: nums[0], freq: freq[0] };
  const idsOccurs = new Map([[currentMax.id, currentMax.freq]]);

  const output = Array(nums.length);
  output[0] = currentMax.freq;

  for (let i = 1; i < nums.length; ++i) {
    const id = nums[i];
    const nextFreq = (idsOccurs.get(id) ?? 0) + freq[i];

    idsOccurs.set(id, nextFreq);

    if (nextFreq >= currentMax.freq) {
      currentMax.id = id;
      currentMax.freq = nextFreq;
    } else if (currentMax.id === id) {
      const newMaxFrequence = [...idsOccurs].reduce((acc, idOccurs) =>
        acc[1] > idOccurs[1] ? acc : idOccurs,
      );

      currentMax.id = newMaxFrequence[0];
      currentMax.freq = newMaxFrequence[1];
    }

    output[i] = currentMax.freq;
  }

  return output;
}

const nums = [2, 3, 2, 1];
const freq = [3, 2, -3, 1];

const output = mostFrequentIDs(nums, freq);

console.log(output); // eslint-disable-line no-console
