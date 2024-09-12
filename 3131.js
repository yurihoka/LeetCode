/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  const ascNums1 = [...nums1].sort((a, b) => a - b);
  const ascNums2 = [...nums2].sort((a, b) => a - b);
  let ans,
    temp,
    count = 0;

  for (let i = 0; i < nums1.length; i++) {
    ans = ascNums2[i] - ascNums1[i];
    temp = ans;

    if (ans === temp) {
      count++;
    }

    if (count === nums1.length) {
      return ans;
    }
  }
};

// console.log(addedInteger([2, 6, 4], [9, 7, 5]));
// console.log(addedInteger([10], [5]));
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1]));
