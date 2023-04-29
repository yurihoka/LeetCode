/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let newValue = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        newValue = prices[i] - prices[j];
        break;
      }
    }
    result.push(newValue);
  }
  return result;
};
