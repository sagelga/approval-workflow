/**
 * Generate the Response indentifing number from the current response
 * @param {*} response
 *
 * @returns {null}
 */
function generateId(response) {
  try {
    var timestamp = response.payloads.timestamp.value;

    var year = /* padLeadingZero( */ timestamp
      .getFullYear()
      .toString(); /* , 4) */
    var month = padLeadingZero(timestamp.getMonth().toString(), 2);
    var id = padLeadingZero(response.payloads.rowNumber - 1, 4);

    var newIdValues = year + month + id;

    pushValue(response.payloads.id, newIdValues);

    return response;
  } catch (error) {
    console.error("generateId() : " + error);
    console.log("year: " + year);
    console.log("month: " + month);
    console.log("newIdValues: " + newIdValues);

    throw new Error(error);
  }
}
