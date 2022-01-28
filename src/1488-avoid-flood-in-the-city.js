/**
 * @param {number[]} rains
 * @return {number[]}
 */
const avoidFlood = (rains) => {
  const rained = new Map();
  const dryIdxs = [];

  for (let i = 0; i < rains.length; ++i) {
    if (rains[i] !== 0) {
      // lake already full of water
      if (rained.has(rains[i])) {
        // could not dry it
        if (!dryIdxs.length) return [];

        const alreadyRainedIdx = rained.get(rains[i]);
        let j;
        for (j = 0; j < dryIdxs.length && dryIdxs[j] < alreadyRainedIdx; ++j);
        // no dry slot available between the two rain day
        if (j === dryIdxs.length) return [];
        rains[dryIdxs[j]] = rains[i];
        dryIdxs.splice(j, 1);
      }
      rained.set(rains[i], i);
      rains[i] = -1;
    } else dryIdxs.push(i);
  }

  // fill the remaining dry slots
  for (const idx of dryIdxs) rains[idx] = 1;

  return rains;
};

/**
 * @param {number[]} rains
 * @return {number[]}
 */
const avoidFlood2 = (rains) => {
  const currentlyFilledLakes = new Set();

  for (let i = 0; i < rains.length; ++i) {
    // is a lake
    if (rains[i] !== 0) {
      // the lake we meet is already full of water
      if (currentlyFilledLakes.has(rains[i])) return [];
      currentlyFilledLakes.add(rains[i]);

      rains[i] = -1;
    } else {
      let j;
      for (
        j = i + 1;
        j < rains.length &&
        (rains[j] === 0 || !currentlyFilledLakes.has(rains[j]));
        ++j
      );
      if (j < rains.length) {
        rains[i] = rains[j];
        currentlyFilledLakes.delete(rains[j]);
      } else rains[i] = 1;
    }
  }

  return rains;
};

const rains = [1, 0, 2, 0, 3, 0, 2, 0, 0, 0, 1, 2, 3];
const rains2 = [1, 0, 2, 0, 3, 0, 2, 0, 0, 0, 1, 2, 3];

const output = avoidFlood(rains);
const output2 = avoidFlood2(rains2);

console.log({ output, output2 }); // eslint-disable-line no-console
