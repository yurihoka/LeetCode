/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  return (result = words.filter((element) => s.startsWith(element)).length);
};
