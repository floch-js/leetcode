/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger(nums1, nums2) {
  return Math.min(...nums2) - Math.min(...nums1);
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger2(nums1, nums2) {
  const sum1 = nums1.reduce((acc, n) => acc + n);
  const sum2 = nums2.reduce((acc, n) => acc + n);

  return (sum2 - sum1) / nums1.length;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger3(nums1, nums2) {
  const sorted1 = [...nums1].sort((a, b) => a - b);
  const sorted2 = [...nums2].sort((a, b) => a - b);

  return sorted2[0] - sorted1[0];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger4(nums1, nums2) {
  let gap = 0;

  for (let i = 0; i < nums1.length; i++) {
    gap += nums2[i] - nums1[i];
  }

  return gap / nums1.length;
}

const nums1 = [2, 6, 4];
const nums2 = [9, 7, 5];

const output = addedInteger(nums1, nums2);
const output2 = addedInteger2(nums1, nums2);
const output3 = addedInteger3(nums1, nums2);
const output4 = addedInteger4(nums1, nums2);

console.log({ output, output2, output3, output4 }); // eslint-disable-line no-console
