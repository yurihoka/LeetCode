/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);

  for (let i = 0; i < sortedNums.length; i++) {
    for (let j = 0; j < sortedNums.length; j++) {
      if (sortedNums[i] === -sortedNums[j]) {
        return sortedNums[i];
      }
    }
  }
  return -1;
};
