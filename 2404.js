// △
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let evenList = [];
  let count = 0;
  let number = -1;

  for (i = 0; i < nums.length; i++) {
    let item = nums[i];

    if (item % 2 == 0 && !evenList.includes(item)) {
      evenList.push(item);
      let duplicateList = nums.filter((value) => value == item);

      if (duplicateList.length > count) {
        count = duplicateList.length;
        number = item;
      } else if (duplicateList.length == count && item < number) {
        number = item;
      }
    }
  }

  return number;
};
