/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    
  for (let i = 0; i < words.length; i++) {
    let reverseWords = words[i].split("").reverse().join("");
    if (words[i] === reverseWords) {
      return words[i];
    }
  }
  return "";
};
