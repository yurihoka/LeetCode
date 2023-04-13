/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      return s[i];
    } else {
      map[s[i]] = 1;
    }
  }
};
