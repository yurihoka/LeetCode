/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const result = [];
  const index = word.indexOf(ch);

  for (let i = 0; i < word.length; i++) {
    if ((word[i] === ch) & (i === index)) {
      result.reverse();
      result.unshift(ch);
      continue;
    }
    result.push(word[i]);
  }
  return result.join("");
};
