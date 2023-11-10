/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let ans = [];
  let diffSum = 0;
  let minSum = Infinity;

  for (let i = 1; i < sortedArr.length; i++) {
    diffSum = sortedArr[i] - sortedArr[i - 1];

    if (diffSum < minSum) {
      minSum = diffSum;
      ans = [[sortedArr[i - 1], sortedArr[i]]];
    } else if (diffSum === minSum) {
      ans.push([sortedArr[i - 1], sortedArr[i]]);
    }
  }
  return ans;
};
