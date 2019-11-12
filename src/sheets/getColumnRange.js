/**
 *
 * @param {String|Number} columnNumber
 * @param {Object} sheetObject
 */
function getColumnRange(columnNumber, sheetObject) {
  columnNumber = columnToLetter(columnNumber);

  var result = sheetObject
    .getRange(
      columnNumber + "1" + ":" + columnNumber + sheetObject.getLastRow()
    )
    .getValues();

  var arr1d = [].concat.apply([], result);

  return arr1d;
}
