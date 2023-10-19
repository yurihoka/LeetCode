/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      set.add(nums[i]);
    }
  }
  return set.size;
};
