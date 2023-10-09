/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  if (sortedNums.length > 2) {
    return sortedNums[1];
  } else {
    return -1;
  }
};
