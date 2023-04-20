/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  } else {
    const answer = [...num.toString()].reduce((a, c) => a + Number(c), 0);
    return addDigits(answer);
  }
};
