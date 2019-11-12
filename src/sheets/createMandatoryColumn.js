/**
 * Creates a column that is required by the system.
 */
function createMandatoryColumn() {
  createNewColumn("Response ID", {
    appendAfter: true,
    sheetObject: sheet,
    checkExistance: true
  });

  var stepOption = ["Status", "Timestamp", "Response Form URL", "Comments"];
  for (var i = 1; i <= CONFIG.flow_step; i += 1) {
    for (var j = 0; j < stepOption.length; j += 1) {
      var colName = "Step " + i + " " + stepOption[j];
      // console.log('Creating column: ' + colName);
      createNewColumn(colName, {
        appendAfter: false,
        sheetObject: sheet,
        checkExistance: true
      });
    }
  }

  createNewColumn("Skips Override", {
    appendAfter: false,
    sheetObject: sheet,
    checkExistance: true
  });
}
