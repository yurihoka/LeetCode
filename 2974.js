/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let orderedNums = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (i % 2 === 0) {
      orderedNums.push(sortedNums[i + 1]);
    } else {
      orderedNums.push(sortedNums[i - 1]);
    }
  }
  return orderedNums;
};
