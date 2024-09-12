/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let map = new Map();
  const items = [...items1, ...items2];

  for (const [val, weight] of items) {
    if (map[val]) {
      map[val] += weight;
    } else {
      map[val] = weight;
    }
  }
  return Object.entries(map);
};
