/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  const sorted = [...nums].sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      ans.push(i);
    }
  }
  return ans;
};
