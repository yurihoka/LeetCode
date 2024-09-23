/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const twoSneakyNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      twoSneakyNums.push(sortedNums[i]);
    }
  }

  return twoSneakyNums;
};
