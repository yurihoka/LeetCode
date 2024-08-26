/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  const sortedBoxTypes = [...boxTypes].sort((a, b) => b[1] - a[1]);
  let output = 0;
  let addedBoxes = 0;

  for (let i = 0; i < sortedBoxTypes.length; i++) {
    if (addedBoxes === truckSize) return output;

    const numberOfBoxes = sortedBoxTypes[i][0];
    const numberOfUnitsPerBox = sortedBoxTypes[i][1];

    if (addedBoxes + numberOfBoxes <= truckSize) {
      output += numberOfBoxes * numberOfUnitsPerBox;
      addedBoxes += numberOfBoxes;
    } else {
      output += (truckSize - addedBoxes) * numberOfUnitsPerBox;
      addedBoxes += truckSize - addedBoxes;
    }
  }

  return output;
};
