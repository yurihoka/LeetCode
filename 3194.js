/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  const loopCount = nums.length / 2;
  const sortedNums = [...nums].sort((a, b) => a - b);
  const avg = (sortedNums[loopCount - 1] + sortedNums[loopCount]) / 2;

  return avg;
};
