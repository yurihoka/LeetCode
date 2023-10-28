/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  const reversed1 = parseInt(num.toString().split("").reverse().join(""));
  const reversed2 = parseInt(reversed1.toString().split("").reverse().join(""));

  return reversed2 === num;
};
