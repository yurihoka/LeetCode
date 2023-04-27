/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const sortOfNums = [...nums].sort((a, b) => a - b);

  return (
    sortOfNums[nums.length - 1] * sortOfNums[nums.length - 2] -
    sortOfNums[0] * sortOfNums[1]
  );
};
