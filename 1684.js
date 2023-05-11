/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;

  for (let item of words) {
    if (item.split("").every((word) => allowed.includes(word))) {
      count++;
    }
  }
  return count;
};
