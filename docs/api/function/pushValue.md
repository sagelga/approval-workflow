/**
 *
 * @param {*} response
 * @param {*} value
 */
function pushValue(response, value) {
  response.value = value;
  setCellValue(response.cell, value, sheet);
}
