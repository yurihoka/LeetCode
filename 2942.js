/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const arrayOfIndices = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arrayOfIndices.push(i);
    }
  }
  return arrayOfIndices;
};

// console.log(findWordsContaining(["leet","code"], "e"));
// console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));
// console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"));