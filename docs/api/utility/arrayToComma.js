/**
 * Converts 1 dimension arrays (normal ones) to String
 * by dividing it via ', ' to separate the string values in different array list
 * @param {Array} array - 1 dimension array. nothing too fancy.
 * @returns {String} as comma separated
 *
 * @example
 * arrayToComma(['1', '2', '3'])
 * => '1, 2, 3'
 */
function arrayToComma(arrays) {
  var result = "";

  for (var i = 0; i < arrays.length; i += 1) {
    result += i < arrays.length - 1 ? arrays[i] + ", " : arrays[i];
  }

  return result;
}
