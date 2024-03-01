/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let maxDiff = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) {
        continue;
      }

      const diff = nums[j] - nums[i];

      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }
  return maxDiff ? maxDiff : -1;
};
