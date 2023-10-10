/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  return sortedNums.length > 2 ? sortedNums[1] : -1;
};
