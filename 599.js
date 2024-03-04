/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const commonStr = list1.filter((item) => list2.includes(item));
  const temp = commonStr.map(
    (item) => list1.indexOf(item) + list2.indexOf(item)
  );
  const min = Math.min(...temp);

  return commonStr.filter((item, index) => temp[index] === min);
};
