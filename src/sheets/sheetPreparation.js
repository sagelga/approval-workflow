/**
 *
 */
function sheetPreparation() {
  var ui = SpreadsheetApp.getUi();

  if (
    getColumnNumber("Response ID", { rowNumber: 1, sheetObject: sheet }) ===
    null
  ) {
    ui.alert('Column "Response ID" not found in sheet');
  }
  if (
    getColumnNumber("Skips Override", { rowNumber: 1, sheetObject: sheet }) ===
    null
  ) {
    ui.alert('Column "Skips Override" not found in sheet');
  }

  var stepOption = ["Status", "Timestamp", "Response Form URL", "Comments"];
  for (var i = 1; i <= CONFIG.flow_step; i += 1) {
    for (var j = 0; j < stepOption.length; j += 1) {
      var colName = "Step " + i + " " + stepOption[j];
      if (
        getColumnNumber(colName, { rowNumber: 1, sheetObject: sheet }) === null
      ) {
        ui.alert('Column "' + colName + '" not found in sheet');
      }
    }
  }

  if (
    getColumnNumber("Timestamp", {
      rowNumber: 1,
      sheetObject: inboundSheet
    }) === null
  ) {
    ui.alert('Column "Timestamp" not found in inboundSheet');
  }
  if (
    getColumnNumber("Bound to Response ID", {
      rowNumber: 1,
      sheetObject: inboundSheet
    }) === null
  ) {
    ui.alert('Column "Bound to Response ID" not found in inboundSheet');
  }
  if (
    getColumnNumber("Email Address", {
      rowNumber: 1,
      sheetObject: inboundSheet
    }) === null
  ) {
    ui.alert('Column "Email Address" not found in inboundSheet');
  }
  if (
    getColumnNumber("Response Result", {
      rowNumber: 1,
      sheetObject: inboundSheet
    }) === null
  ) {
    ui.alert('Column "Response Result" not found in inboundSheet');
  }
  if (
    getColumnNumber("Comments", { rowNumber: 1, sheetObject: inboundSheet }) ===
    null
  ) {
    ui.alert('Column "Comments" not found in inboundSheet');
  }
}
