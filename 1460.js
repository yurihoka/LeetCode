/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const sortedTarget = [...target].sort((a, b) => a - b);
  const sortedArr = [...arr].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < target.length; i++) {
    if (sortedTarget[i] !== sortedArr[i]) {
      return false;
    }
  }
  return true;
};
