/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const ans = stones.split("").filter((stone) => jewels.includes(stone));
  return ans.length;
};
