/**
 * @param {number} prev
 * @param {number} current
 * @param {number} prevCount
 * @return {number}
 */
function getNextCount(prev, current, prevCount) {
  switch (current) {
    case prev + 1:
      return prevCount + 1;
    case prev:
      return prevCount;
    default:
      return 1;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  return Math.max(
    ...nums.slice(1).reduce(
      ([prev, count, allCounts], n) => {
        const nextCount = getNextCount(prev, n, count);

        return [n, nextCount, [...allCounts, nextCount]];
      },
      [nums[0], 1, [1]],
    )[2],
  );
}

/**
 * @param {number[]} min
 * @param {number[]} max
 * @return {object}
 */
const makeSequence = (min, max = min) => ({
  min,
  max,
});

/**
 * @return {object}
 */
function initSequenceList() {
  let sequenceList = [];

  return {
    insertN(n) {
      let alreadyHaveMatchingSequenceAt = null;

      for (let i = 0; i < sequenceList.length; ++i) {
        const seq = sequenceList[i];

        if (n >= seq.min && n <= seq.max) return;

        if (n === seq.min - 1 || n === seq.max + 1) {
          if (alreadyHaveMatchingSequenceAt !== null) {
            const newSequence =
              sequenceList[alreadyHaveMatchingSequenceAt].min < seq.min
                ? makeSequence(
                    sequenceList[alreadyHaveMatchingSequenceAt].min,
                    seq.max,
                  )
                : makeSequence(
                    seq.min,
                    sequenceList[alreadyHaveMatchingSequenceAt].max,
                  );
            sequenceList.splice(alreadyHaveMatchingSequenceAt, 1);
            sequenceList.splice(i - 1, 1);
            return void sequenceList.unshift(newSequence);
          }

          alreadyHaveMatchingSequenceAt = i;
          if (n === seq.min - 1) seq.min = n;
          else seq.max = n;
        }
      }

      if (alreadyHaveMatchingSequenceAt === null)
        sequenceList.push(makeSequence(n));
    },
    getMaxConsecutiveLength() {
      return Math.max(
        ...sequenceList.map(({ min, max }) => Math.abs(max - min) + 1),
      );
    },
  };
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive2(nums) {
  if (!nums.length) return 0;

  const { insertN, getMaxConsecutiveLength } = initSequenceList();

  for (const n of nums) insertN(n);

  return getMaxConsecutiveLength();
}

function useList() {
  const makeListNode = (data, next = null) => ({ data, next });
  let head = null;

  return {
    getList() {
      return head;
    },
    pushFront(data) {
      head = makeListNode(data, head);
    },
    getNodeAt(index) {
      let dummyHead = head;

      for (let i = 0; i < index; ++i, dummyHead = dummyHead.next);
      return dummyHead;
    },
    removeNodeAt(index) {
      if (index === 0) {
        if (head) head = head.next;
        return;
      }

      let dummyHead = head;

      for (let i = 1; i < index; ++i, dummyHead = dummyHead.next);
      dummyHead.next = dummyHead.next.next;
    },
  };
}

/**
 * @return {object}
 */
function initSequenceList2() {
  const { getList, pushFront, getNodeAt, removeNodeAt } = useList();

  return {
    insertN(n) {
      let alreadyHaveMatchingSequenceAt = null;
      let i = 0;

      for (let dummyHead = getList(); dummyHead; dummyHead = dummyHead.next) {
        const seq = dummyHead.data;

        if (n >= seq.min && n <= seq.max) return;

        if (n === seq.min - 1 || n === seq.max + 1) {
          if (alreadyHaveMatchingSequenceAt !== null) {
            const first = getNodeAt(alreadyHaveMatchingSequenceAt);
            const second = getNodeAt(i);
            const newSequence =
              first.data.min < second.data.min
                ? makeSequence(first.data.min, second.data.max)
                : makeSequence(second.data.min, first.data.max);
            removeNodeAt(alreadyHaveMatchingSequenceAt);
            removeNodeAt(i - 1);
            return void pushFront(newSequence);
          }

          alreadyHaveMatchingSequenceAt = i;
          if (n === seq.min - 1) seq.min = n;
          else seq.max = n;
        }
        ++i;
      }

      if (alreadyHaveMatchingSequenceAt === null) pushFront(makeSequence(n));
    },
    getMaxConsecutiveLength() {
      let longuest = 0;

      for (let dummyHead = getList(); dummyHead; dummyHead = dummyHead.next) {
        const { min, max } = dummyHead.data;
        longuest = Math.max(Math.abs(max - min) + 1, longuest);
      }

      return longuest;
    },
  };
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive3(nums) {
  if (!nums.length) return 0;

  const { insertN, getMaxConsecutiveLength } = initSequenceList2();

  for (const n of nums) insertN(n);

  return getMaxConsecutiveLength();
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive4(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (set.has(current + 1)) {
        ++streak;
        ++current;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}

//const nums = [1, 2]

//const output = longestConsecutive4(nums)

//console.log(output)
