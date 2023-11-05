/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let max = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > max && nums.includes(-nums[i])) {
      max = nums[i];
    }
  }
  return max > 0 ? max : -1;
};
