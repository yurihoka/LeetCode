/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const positiveMaxK = [-1];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === -nums[j]) {
        positiveMaxK.push(Math.abs(nums[j]));
      }
    }
  }
  return Math.max(...positiveMaxK);
};

// console.log(findMaxK([-1, 2, -3, 3]));
// console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
// console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
