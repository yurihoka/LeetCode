/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const arrayOfIndice = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arrayOfIndice.push(i);
    }
  }
  return arrayOfIndice;
};

// console.log(findWordsContaining(["leet","code"], "e"));
// console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));
// console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "z"));