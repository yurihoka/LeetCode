/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const movedEvenNum = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      movedEvenNum.unshift(nums[i]);
    } else {
      movedEvenNum.push(nums[i]);
    }
  }
  return movedEvenNum;
};
