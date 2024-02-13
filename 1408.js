/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const substringArr = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        substringArr.push(words[i]);
        break;
      }
    }
  }
  return substringArr;
};

// console.log(stringMatching(["mass", "as", "hero", "superhero"]));
// console.log(stringMatching(["leetcode", "et", "code"]));
// console.log(stringMatching(["blue", "green", "bu"]));
