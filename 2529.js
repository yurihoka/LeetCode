/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let negativeInt = 0;
  let positiveInt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeInt++;
    } else if (nums[i] > 0) {
      positiveInt++;
    }
  }
  return Math.max(negativeInt, positiveInt);
};
