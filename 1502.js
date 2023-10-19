/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let difference = sortedArr[1] - sortedArr[0];

  for (let i = 1; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] !== difference) {
      return false;
    }
  }
  return true;
};
