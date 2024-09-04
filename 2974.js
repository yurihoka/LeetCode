/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let orderedNums = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (i === 0 || i % 2 === 0) {
      orderedNums.push(sortedNums[i + 1]);
    } else if (i % 2 === 1) {
      orderedNums.push(sortedNums[i - 1]);
    }
  }
  return orderedNums;
};

console.log(numberGame([5, 4, 2, 3]));
