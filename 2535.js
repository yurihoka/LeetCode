/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let eleSum = 0;
  let digitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    eleSum += nums[i];

    while (nums[i] > 0) {
      digitSum += nums[i] % 10;
      nums[i] = Math.floor(nums[i] / 10);
    }
  }
  
  let diff = eleSum - digitSum;
  return diff;
};
