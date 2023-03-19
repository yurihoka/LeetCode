/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;
  let temp = 0;

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    result = Math.max(result, temp);
  }

  return result;
};
