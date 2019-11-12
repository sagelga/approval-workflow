/**
 *
 * @param {Number} rowNumber
 * @param {Object} sheetObject
 */
function getRowRange(rowNumber, sheetObject) {
  var result = sheetObject
    .getRange(
      "A" +
        rowNumber +
        ":" +
        columnToLetter(sheetObject.getLastColumn()) +
        rowNumber
    )
    .getValues()[0];

  return result;
}
