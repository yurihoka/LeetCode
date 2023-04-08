/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const array = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
  const map = {};
  const result = [];

  for (const number of array) {
    if (map[number]) {
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }

  for (const key in map) {
    if (map[key] >= 2) {
      result.push(key);
    }
  }

  return result;
};
