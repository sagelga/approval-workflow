/**
 * Generates the bodyfield of the following request rowNumber.
 * @param {*} id
 */
function getBodyField(rowNumber) {
  /* Adding more components to the email body */
  try {
    var body = new String();

    var headerRange = sheet
      .getRange(
        CONFIG.form_column_range.start +
          "1" +
          ":" +
          CONFIG.form_column_range.stop +
          "1"
      )
      .getValues()[0];

    var valueRange = sheet
      .getRange(
        CONFIG.form_column_range.start +
          rowNumber +
          ":" +
          CONFIG.form_column_range.stop +
          rowNumber
      )
      .getValues()[0];

    var backgroundColor;
    var rowCount = 0;

    body +=
      '<table style="width:100%; border: 1px solid black;text-align: left; /*border-collapse: collapse;*/padding: 8px;">';
    body += "<tr>";
    body += "<th>" + "Question" + "</th>";
    body += "<th>" + "Response" + "</th>";
    body += "</tr>";

    for (var i = 0; i <= headerRange.length; i += 1) {
      if (!valueRange[i]) {
        continue;
      }

      rowCount += 1;
      if (rowCount % 2) {
        backgroundColor = ' style="background-color: #dddddd"';
      } else {
        backgroundColor = "";
      }

      body += "<tr" + backgroundColor + ">";
      body += "<td>" + headerRange[i] + "</td>";
      body += "<td>" + valueRange[i] + "</td>";
      body += "</tr>";
    }

    body += "</table>";

    return body;
  } catch (error) {
    console.error("getBodyField() : " + error);

    console.warn(rowNumber);
    console.log("headerRange: " + headerRange);
    console.log("valueRange: " + valueRange);
  }
}
