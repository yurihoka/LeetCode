/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  for (let i = 0; i < alphabet.length; i++) {
    if (sentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};
