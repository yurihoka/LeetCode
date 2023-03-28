/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  const lastWordLength = words[words.length - 1].length;
  return lastWordLength;
};
