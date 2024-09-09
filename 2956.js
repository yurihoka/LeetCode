/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const maxLen = nums1.length > nums2.length ? nums1.length : nums2.length;
  let ans1 = 0;
  let ans2 = 0;

  for (let i = 0; i < maxLen; i++) {
    if (nums2.includes(nums1[i])) {
      ans1++;
    }
    if (nums1.includes(nums2[i])) {
      ans2++;
    }
  }
  return [ans1, ans2];
};

console.log(findIntersectionValues([2, 3, 2], [1, 2]));
