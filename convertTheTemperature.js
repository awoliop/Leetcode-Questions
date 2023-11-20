/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let Kelvin = celsius + 273.15;
  let Fahrenheit = celsius * 1.8 + 32.0;
  return [Kelvin, Fahrenheit];
};
