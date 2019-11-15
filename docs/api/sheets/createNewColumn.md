/**
 *
 * @param {*} name
 * @param {Object} [args]
 * @param {Number} [args.columnNumber = sheetObject.getLastColumn()]
 * @param {Boolean} [args.appendAfter = true]
 * @param {Sheet} [args.sheetObject = sheet]
 * @param {Boolean} [args.checkExistance = false]
 */
function createNewColumn(name, args) {
  /* Check wheather the column is already exists or not */
  var colNum = getColumnNumber(name, {
    rowNumber: 1,
    sheetObject: args.sheetObject
  });

  if (args.checkExistance && colNum) {
    console.warn(name + "already exists");
    return colNum;
  }

  try {
    /* Setup default values */
    var sheetObject = args.sheetObject || sheet;
    var location = args.columnNumber || sheetObject.getLastColumn();
    var appendAfter = args.appendAfter || true;

    /* Insert a new column at the end of the list */
    if (appendAfter) {
      sheetObject.insertColumnAfter(location);
      location += 1;
    } else {
      sheetObject.insertColumnBefore(location);
    }

    var headerCell = columnToLetter(location) + "" + CONFIG.headerRow;
    setCellValue(headerCell, name, sheetObject);
    console.log(headerCell);
    // console.log("Insertion of " + name + " is completed.");
  } catch (error) {
    console.error("createNewColumn() : " + error);
    console.log("appendAfter: " + appendAfter);
    console.log("location: " + location);
  }
}
