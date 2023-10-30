/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const ans = [];

  for (let i = left; i <= right; i++) {
    let numStr = i.toString();
    let allPass = true;

    for (j = 0; j < numStr.length; j++) {
      if (i % parseInt(numStr[j]) !== 0) {
        allPass = false;
        break;
      }
    }

    if (allPass) {
      ans.push(i);
    }
  }
  return ans;
};
