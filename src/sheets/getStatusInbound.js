/**
 * Retrieves the data (status) from the Inbound sheet.
 * @param {*} id
 * @param {*} approverEmail
 */
function getStatusInbound(id, approverEmail) {
  var idColNum = getColumnNumber("Bound to Response ID", {
    rowNumber: 1,
    sheetObject: inboundSheet
  });
  var emailColNum = getColumnNumber("Email Address", {
    rowNumber: 1,
    sheetObject: inboundSheet
  });
  var idGrid = getColumnRange(idColNum, inboundSheet);
  var emailGrid = getColumnRange(emailColNum, inboundSheet);
  // var indexNumber = idGrid.indexOf(id);
  var attempt = 1;

  while (attempt < inboundSheet.getLastRow()) {
    /* Find id that matches */
    indexNumber = idGrid.indexOf(id);

    /* If there is a match, continue */
    if (!(indexNumber + attempt)) {
      break;
    }

    // console.log('idGrid: ' + idGrid);
    // console.log('indexNumber: ' + indexNumber + 'id: ' + id + 'approverEmail: ' + approverEmail);

    var email = emailGrid[indexNumber]
      .toString()
      .toLowerCase()
      .trim()
      .replace(/(\r\n\t|\n|\r\t)/gm, "");
    approverEmail = approverEmail
      .toString()
      .toLowerCase()
      .trim()
      .replace(/(\r\n\t|\n|\r\t)/gm, "");

    // console.log('email: ' + email + '|  ' + 'approverEmail: ' + approverEmail + '|');

    /* If the approverEmail is a match to the real approver email, set the value */
    if (email === approverEmail) {
      var statusCell =
        columnToLetter(
          getColumnNumber("Response Result", {
            rowNumber: 1,
            sheetObject: inboundSheet
          })
        ) +
        "" +
        (indexNumber + attempt);
      var result = inboundSheet.getRange(statusCell).getValue();

      var commentsCell =
        columnToLetter(
          getColumnNumber("Comments", {
            rowNumber: 1,
            sheetObject: inboundSheet
          })
        ) +
        "" +
        (indexNumber + attempt);
      var comments = inboundSheet.getRange(commentsCell).getValue();

      var timestampCell =
        columnToLetter(
          getColumnNumber("Timestamp", {
            rowNumber: 1,
            sheetObject: inboundSheet
          })
        ) +
        "" +
        (indexNumber + attempt);
      var timestamp = inboundSheet.getRange(timestampCell).getValue();

      console.log(statusCell);

      return {
        status: result,
        comments: comments,
        timestamp: timestamp
        // cell: {
        //   status: statusCell,
        //   comments: commentsCell,
        //   timestamp: timestampCell
        // }
      };
    }

    /* Recalculates after failing to match */
    idGrid.splice(indexNumber, 1);
    emailGrid.splice(indexNumber, 1);
    attempt += 1;
  }

  /* If the search fails, return nothing */
  return null;
}
