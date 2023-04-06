/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const leftNums = [0];
  const rightNums = [0];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    leftNums.push(leftSum);
  }

  for (let i = nums.length - 1; i > 0; i--) {
    rightSum += nums[i];
    rightNums.unshift(rightSum);
  }

  return nums.map((_, i) => Math.abs(leftNums[i] - rightNums[i]));
};
