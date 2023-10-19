/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const arr = [];
  for (let w of words[0]) {
    if (words.every((a) => a.includes(w))) {
      arr.push(w);
      words = words.map((a) => a.replace(w, ""));
    }
  }
  return arr;
};
