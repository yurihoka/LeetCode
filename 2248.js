/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  const ans = [];

  for (let i = 0; i < nums[0].length; i++) {
    if (nums.every((x) => x.includes(nums[0][i]))) {
      ans.push(nums[0][i]);
    }
  }

  return ans.sort((a, b) => a - b);
};
