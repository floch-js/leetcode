/**
 * @param {string} s
 * @param {string} of
 * @return {number}
 */
function lastIndexOf(s, of) {
  const cache = new Map();

  return (function _memoizedLastIndexOf() {
    if (cache.has(of)) return cache.get(of);

    const res = s.lastIndexOf(of);
    cache.set(of, res);

    return res;
  })();
}

/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(s) {
  const partitions = [];

  for (let i = 0; i < s.length; ++i) {
    let minPartitionEnd = lastIndexOf(s, s[i]);

    for (let j = i + 1; j < minPartitionEnd; ++j)
      minPartitionEnd = Math.max(lastIndexOf(s, s[j]), minPartitionEnd);

    partitions.push(minPartitionEnd + 1 - i);
    i = minPartitionEnd;
  }

  return partitions;
}

/**
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels2(s) {
  const labels = new Map();
  const partitions = [];
  let partitionIdCounter = 0;
  let currentPartition;

  for (const label of s) {
    if (!labels.has(label)) {
      currentPartition = partitionIdCounter;
      partitions.push({ value: currentPartition });
      labels.set(label, { id: partitions[currentPartition], occurs: 1 });
      ++partitionIdCounter;
    } else {
      const { id, occurs } = labels.get(label);

      if (id.value !== currentPartition) {
        const prevId = id.value;
        for (let i = 0; i < partitions.length; ++i)
          if (
            partitions[i].value >= prevId &&
            partitions[i].value < currentPartition
          )
            partitions[i].value = currentPartition;
      }

      labels.set(label, { id, occurs: occurs + 1 });
    }
  }

  return Object.values(
    [...labels.values()].reduce(
      (acc, { id: { value }, occurs }) => ({
        ...acc,
        [value]: (acc[value] || 0) + occurs,
      }),
      {},
    ),
  );
}

const s = 'ababcbacadefegdehijhklij';

const output = partitionLabels2(s);

console.log(output);
