/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let uniqArr = [];
  uniqArr = words.map((word) => {
    return [...new Set(word)].sort().join("");
  });

  let count = 0;
  for (let i = 0; i < uniqArr.length; i++) {
    for (let j = i + 1; j < uniqArr.length; j++) {
      if (uniqArr[i] === uniqArr[j]) {
        count++;
      }
    }
  }

  return count;
};
