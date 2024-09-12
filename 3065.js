/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const filteredByOverK = nums.filter((num) => num >= k);

  return nums.length - filteredByOverK.length;
};
