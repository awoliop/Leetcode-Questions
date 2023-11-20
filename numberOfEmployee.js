/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let metTarget = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      metTarget++;
    }
  }
  return metTarget;
};
