/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let count = 0;
  let i = 0;

  while (i < sortedNums.length) {
    if (sortedNums[i + 1] === sortedNums[i]) {
      sortedNums.splice(i, 2);
      count++;
    } else {
      i++;
    }
  }
  return [count, sortedNums.length];
};
