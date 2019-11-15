/**
 * Converts Google Range to Array
 * @tutorial https://developers.google.com/apps-script/reference/spreadsheet/range
 * @param {Range} range - (Must be Google Range datatype)
 */
function rangeToArray(range) {
  var result = [];

  for (var i = 1; i < range.length; i++) {
    var rowResult = "";
    for (var j = 1; j < range[i].length; j++) {
      if (range[i][j]) {
        rowResult = rowResult + ", " + range[i][j];
      }
    }
    result.append(rowResult);
  }

  return result;
}
