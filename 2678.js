/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;

  for (let i = 0; i < details.length; i++) {
    if (details[i].split("").slice(11, 13).join("") > 60) {
      count++;
    }
  }
  return count;
};
