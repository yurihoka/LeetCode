/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  const sum = arrivalTime + delayedTime;

  return sum >= 24 ? sum - 24 : sum;
};
