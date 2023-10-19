/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (
      vowel.includes(words[i][0]) &&
      vowel.includes(words[i][words[i].length - 1])
    ) {
      count++;
    }
  }
  return count;
};
