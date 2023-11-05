/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      continue;
    } else if (nums[i] === nums[i + 1]) {
      temp = nums[i] * 2;
      nums.splice(i, 2, temp, 0);
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};
