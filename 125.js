/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const newString = s.toLowerCase().replace(/\W|_/g, "");
  const reverseNewString = [...newString].reverse();

  return newString === reverseNewString.join("");
};
