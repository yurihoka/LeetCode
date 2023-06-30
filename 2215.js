/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const ans = [];
  const ans0 = [];
  const ans1 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (!ans0.includes(nums1[i])) {
        ans0.push(nums1[i]);
      }
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (!ans1.includes(nums2[i])) {
        ans1.push(nums2[i]);
      }
    }
  }

  ans.push(ans0);
  ans.push(ans1);

  return ans;
};
