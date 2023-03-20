/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = s.trim().split(" ");
  result = result[result.length - 1].length;
  return result;
};
