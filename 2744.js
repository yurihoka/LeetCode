/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let sortedWordI = words[i].split("").sort().join("");
    for (let j = i + 1; j < words.length; j++) {
      let sortedWordJ = words[j].split("").sort().join("");
      if (sortedWordI === sortedWordJ) {
        count++;
      }
    }
  }
  return count;
};
