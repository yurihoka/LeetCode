/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const resultOfCandy = candyType.length / 2;
  const sorted = [...new Set(candyType)].sort((a, b) => a - b);

  if (resultOfCandy < sorted.length) {
    return resultOfCandy;
  } else {
    return sorted.length;
  }
};
