/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
  const { length } = nums3;
  return length % 2
    ? nums3[Math.floor(length / 2)]
    : (nums3[length / 2] + nums3[length / 2 - 1]) / 2;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays2(nums1, nums2) {
  let nums3 = [];
  let i = 0;
  let j = 0;

  if (!nums1 || !nums1.length) nums3 = nums2;
  else if (!nums2 || !nums2.length) nums3 = nums1;
  else {
    while (1) {
      if (i === nums1.length) {
        nums3 = [...nums3, ...nums2.slice(j)];
        break;
      }
      if (j === nums2.length) {
        nums3 = [...nums3, ...nums1.slice(i)];
        break;
      }
      while (nums1[i] <= nums2[j]) {
        nums3.push(nums1[i]);
        ++i;
      }
      while (nums2[j] <= nums1[i]) {
        nums3.push(nums2[j]);
        ++j;
      }
    }
  }

  const { length } = nums3;

  return length % 2
    ? nums3[Math.floor(length / 2)]
    : (nums3[length / 2] + nums3[length / 2 - 1]) / 2;
}

/*const nums1 = [1, 3]*/
/*const nums2 = [2]*/

/*const output = findMedianSortedArrays2(nums1, nums2)*/

/*console.log(output)*/
