/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  
  for (let i = 0; i < nums.length; i++) {
    ans = nums.concat(nums);
  }

  return ans;
};
