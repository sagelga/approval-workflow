/**
 *
 */
function selectiveApprove() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.prompt(
    "Please enter row number",
    "Row number do includes header row. Make sure it is a number.",
    ui.ButtonSet.OK
  );

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    // ui.alert('Your name is ' + text + '.');

    if (!text) {
      ui.alert("Please insert some value.");
    } else {
      approveResponse(parseInt(text));
    }

    // } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    // ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    // ui.alert('You closed the dialog.');
  }
}
