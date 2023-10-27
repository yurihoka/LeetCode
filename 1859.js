/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const temp = s.split(" ");
  const result = [];

  for (let i = 1; i <= temp.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (temp[j].includes(i)) {
        result.push(temp[j].slice(0, -1));
      }
    }
  }
  return result.join(" ");
};
