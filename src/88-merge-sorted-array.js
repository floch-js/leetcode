/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  const merged = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort(
    (a, b) => a - b,
  );

  for (let i = 0; i < merged.length; ++i) nums1[i] = merged[i];
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [4, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // eslint-disable-line no-console
