/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 2]) {
      return false;
    }
  }

  return true;
};
