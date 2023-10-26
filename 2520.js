/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const splitedNums = num.toString().split("");
  let count = 0;

  for (let i = 0; i < splitedNums.length; i++) {
    if (num % splitedNums[i] === 0) {
      count++;
      continue;
    }
  }
  return count;
};
