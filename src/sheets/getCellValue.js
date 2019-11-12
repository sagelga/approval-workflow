/**
 *
 * @param {*} columnNumber
 * @param {*} rowNumber
 * @param {*} sheetObject
 */
function getCellValue(columnNumber, rowNumber, sheetObject) {
  try {
    columnNumber = columnToLetter(columnNumber);

    return sheetObject.getRange(columnNumber + "" + rowNumber).getValue();
  } catch (error) {
    console.error("getCellValue() : " + error);

    console.log("columnNumber: " + columnNumber);
    console.log("rowNumber: " + rowNumber);
    console.log("sheetObject: " + sheetObject);

    throw new Error(error);
  }
}
