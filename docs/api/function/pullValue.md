/**
 * Pull the value from the sheet, and put it into the *response* Object.
 * DEBUG NOTE : If the error of : 'pullValue() : Exception: Range not found'. Make sure that there is a value in the `.cell` thing
 * @param {Object} response
 * @returns {Object} response
 */
function pullValue(response) {
  try {
    var mandatoryColumn = ["status", "timestamp", "comments", "formUrl"];
    for (var level = 1; level <= 2; level++) {
      for (var i = 0; i < mandatoryColumn.length; i++) {
        response["step".concat(level)][
          mandatoryColumn[i]
        ].value = sheet
          .getRange(response["step".concat(level)][mandatoryColumn[i]].cell)
          .getValue();
      }
    }

    mandatoryColumn = ["id", "skipRow", "email", "requestType", "timestamp"];
    for (i = 0; i < mandatoryColumn.length; i++) {
      response.payloads[mandatoryColumn[i]].value = sheet
        .getRange(response.payloads[mandatoryColumn[i]].cell)
        .getValue();
    }

    response.step1.email.value = sheet
      .getRange(response.step1.email.cell)
      .getValue();
    response.payloads.bodyField = getBodyField(response.payloads.rowNumber);

    var deadline = response.payloads.timestamp.value;
    deadline = deadline.setDate(deadline.getDate() + CONFIG.responseTimeout);
    response.payloads.requestTimeout = deadline;

    return response;
  } catch (error) {
    console.error("pullValue() : " + error);
    console.log(response);

    throw new Error(error);
  }
}
