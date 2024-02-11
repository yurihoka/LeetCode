/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const peakOfMountain = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peakOfMountain.push(i);
    }
  }
  return peakOfMountain;
};

// console.log(findPeaks([2, 4, 4]));
// console.log(findPeaks([1, 4, 3, 8, 5]));
