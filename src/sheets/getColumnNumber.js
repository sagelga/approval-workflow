/**
 * Retries column number that matches the `searchQuery`
 * @param {String|Number} searchQuery
 * @param {Object} args
 * @param {Number} args.rowNumber
 * @param {Object} args.sheetObject
 */
function getColumnNumber(searchQuery, args) {
  var result =
    getRowRange(args.rowNumber, args.sheetObject).indexOf(searchQuery) + 1;

  if (result) {
    return result;
  } else {
    return null;
  }
}
