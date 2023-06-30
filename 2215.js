/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)

  for (let item of nums1){
      if (s2.has(item)) {
          s1.delete(item)
          s2.delete(item)
      }
  }
  return [Array.from(s1),Array.from(s2)]
};
