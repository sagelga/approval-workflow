/**
 *
 * @param {String} a1Notation
 * @param {String} value
 * @param {Object} [sheetObject=sheet]
 */
function setCellValue(a1Notation, value, sheetObject) {
  if (sheetObject === undefined) {
    sheetObject = sheet;
  }

  sheetObject.getRange(a1Notation).setValue(value);
}
