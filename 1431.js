/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxInCandies = Math.max(...candies);
  const greatestNum = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxInCandies) {
      greatestNum.push(true);
    } else {
      greatestNum.push(false);
    }
  }
  return greatestNum;
};
