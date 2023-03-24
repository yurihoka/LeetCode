/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const newString = s.toLowerCase().replace(/\W|_/g, "");
  const reverseNewString = [...newString].reverse();
  let result = 0;

  for (let i = 0; i < reverseNewString.length; i++) {
    if (reverseNewString[i] === newString[i]) {
      result++;
    }
  }
  return result === newString.length;
};
