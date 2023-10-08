/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  
  for (let i = 0; i < words.length; i++) {
    if (pref === words[i].slice(0, pref.length)) {
      count++;
    }
  }

  return count;
};
