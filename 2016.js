/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        diff = nums[j] - nums[i];
        if (diff > result) {
          result = diff;
        }
      }
    }
  }
  return result ? result : -1;
};
