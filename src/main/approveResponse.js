/**
 *
 * @param {*} i
 */
function approveResponse(i) {
  try {
    /* Create Response object. Works like Class, but they have no functions. */
    var response = {
      payloads: {
        skipRow: {
          value: null,
          cell:
            columnToLetter(
              getColumnNumber("Skips Override", {
                rowNumber: 1,
                sheetObject: sheet
              })
            ) + i
        },
        timestamp: {
          value: null,
          cell:
            columnToLetter(
              getColumnNumber("Timestamp", {
                rowNumber: 1,
                sheetObject: sheet
              })
            ) + i
        },
        rowNumber: i
      }
    };

    /* Check wheather the row is manually skipped or there is actually a new record in the last row / current row */
    if (
      sheet.getRange(response.payloads.skipRow.cell).getValue() ||
      !sheet.getRange(response.payloads.timestamp.cell).getValue()
    ) {
      return;
    }

    /* Then add other payloads to it, if it is a valid thing */
    response.step1 = {
      status: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 1 Status", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      timestamp: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 1 Timestamp", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      comments: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 1 Comments", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      formUrl: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 1 Response Form URL", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      email: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("User's manager email address", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      }
    };

    response.step2 = {
      status: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 2 Status", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      timestamp: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 2 Timestamp", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      comments: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 2 Comments", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      formUrl: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Step 2 Response Form URL", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      email: {
        value: CONFIG.email.step2.email,
        cell: null
      }
    };

    response.step3 = {
      status: {
        value: null,
        cell: null
      },
      timestamp: {
        value: null,
        cell: null
      },
      comments: {
        value: null,
        cell: null
      },
      formUrl: {
        value: null,
        cell: null
      },
      email: {
        value: CONFIG.email.step3.email,
        cell: null
      }
    };

    response.payloads = {
      id: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Response ID", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      skipRow: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Skips Override", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      email: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Email Address", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      requestType: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Request Type", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      timestamp: {
        value: null,
        cell:
          columnToLetter(
            getColumnNumber("Timestamp", {
              rowNumber: 1,
              sheetObject: sheet
            })
          ) + i
      },
      requestTimeout: null,
      bodyField: null,
      rowNumber: i
    };

    /* Tester Checkpoint */
    // Logger.log(response);

    /* Retrive the value from the cell */
    response = pullValue(response);

    /* Create a request Id, if needed */
    if (!response.payloads.id.value) {
      response = generateId(response);
    }

    /* Tester Checkpoint */
    Logger.log(response);

    /* When the status is rejected in one of the status level -> send emails of rejection */
    if (
      response.step1.status.value === "Reject" ||
      response.step2.status.value === "Reject"
    ) {
      stepRejected(response);
    } else if (response.step1.status.value === "Waiting") {
      /* Starting to check the current response status */
      stepOneWaiting(response);
    } else if (response.step1.status.value === "Approve") {
      if (response.step2.status.value === "Waiting") {
        stepTwoWaiting(response);
      } else if (response.step2.status.value === "Approve") {
        /* When response have been approved by both step1 and step2, send emails to step3 */
        stepApproved(response);
      } else {
        /* If nothing applies, apply it like it is '' */
        stepTwoApproval(response);
      }
    } else {
      /* When the status line is not readable by the system, make it '' */
      newEntry(response);
    }
  } catch (error) {
    console.error("approveResponse() : " + error);
    console.log("response: " + response);
    console.log("i: " + i);

    sendEmails(
      CONFIG.admin_email_address,
      "Row " + i + " caused a fatal error",
      error
    );
  }

  /**
   * Runs when the email has been sent to the manager (step1 responder)
   * @param {*} response
   */
  function stepOneWaiting(response) {
    pushValue(response.step1.timestamp, new Date());
    pushValue(response.step1.comments, "Checking Inbounds...");
    var result = getStatusInbound(
      response.payloads.id.value,
      response.step1.email.value
    );

    /* Calculate deadlines and skip the row when the time is out */
    deadline =
      response.payloads.timestamp.value - response.step1.timestamp.value;
    if (deadline <= 0) {
      sendEmails(
        CONFIG.admin_email_address,
        "Response ID : " +
          response.payloads.id.value +
          " takes too long to respond",
        ""
      );
      pushValue(response.payloads.skipRow, "Time out");
    }
    deadline = milisecToTime(deadline);

    if (result) {
      pushValue(response.step1.status, result.status);
      pushValue(response.step1.timestamp, result.timestamp);
      pushValue(response.step1.comments, result.comments);
    } else {
      pushValue(response.step1.comments, "Time left : " + deadline);
    }
  }

  /**
   * Runs when step 1 status is Approved, and requires next step to take action
   * @param {*} response
   */
  function stepTwoWaiting(response) {
    pushValue(response.step2.timestamp, new Date());
    pushValue(response.step2.comments, "Checking Inbounds...");
    var result = getStatusInbound(
      response.payloads.id.value,
      response.step2.email.value
    );

    /* Calculate deadlines and skip the row when the time is out */
    deadline =
      response.payloads.timestamp.value - response.step2.timestamp.value;
    if (deadline <= 0) {
      sendEmails(
        CONFIG.admin_email_address,
        "Response ID : " +
          response.payloads.id.value +
          " takes too long to respond",
        ""
      );
      pushValue(response.payloads.skipRow, "Timed out");
    }
    deadline = milisecToTime(deadline);

    if (result) {
      pushValue(response.step2.status, result.status);
      pushValue(response.step2.timestamp, result.timestamp);
      pushValue(response.step2.comments, result.comments);
    } else {
      pushValue(response.step2.comments, "Time left : " + deadline);
    }
  }

  /**
   * Starts when one of the step have declined the request
   * @param {*} response
   */
  function stepRejected(response) {
    /* Check wheather who rejects the response */
    if (response.step2.status.value === "Reject") {
      stepTwoRejectEmail(response);
      pushValue(response.payloads.skipRow, "Rejected in Step 2");
    } else {
      stepOneRejectEmail(response);
      pushValue(response.payloads.skipRow, "Rejected in Step 1");
    }
  }

  /**
   * Starts when all of the steps have approved the request
   * @param {*} response
   */
  function stepApproved(response) {
    sendFinalEmail(response);
    pushValue(response.payloads.skipRow, "Approved");
  }

  /**
   *
   * @param {*} response
   */
  function newEntry(response) {
    /* Set the formURL to the response ID */
    pushValue(
      response.step1.formUrl,
      CONFIG.approval_form_url + response.payloads.id.value
    );

    pushValue(response.step1.comments, "Sending email to requester");
    sendRecieptEmail(response);
    pushValue(response.step1.timestamp, new Date());
    pushValue(response.step1.comments, "Email sent to requester");

    /* Sending emails to the corresponding user */
    pushValue(response.step1.comments, "Sending approval email ...");
    stepOneApprovalEmail(response);
    pushValue(response.step1.timestamp, new Date());
    pushValue(response.step1.comments, "Email sent to approver");

    pushValue(response.step1.status, "Waiting");
    pushValue(response.step1.timestamp, new Date());
    pushValue(response.step1.comments, "");
  }

  function stepTwoApproval(response) {
    /* Set the formURL to the response ID */
    pushValue(
      response.step2.formUrl,
      CONFIG.approval_form_url + response.payloads.id.value
    );

    pushValue(response.step2.comments, "Sending email to Approver 2 ...");
    stepTwoApprovalEmail(response);
    pushValue(response.step2.timestamp, new Date());
    pushValue(response.step2.comments, "Email sent");

    /* Sending emails to the corresponding user */
    pushValue(response.step2.status, "Waiting");
    pushValue(response.step2.timestamp, new Date());
    pushValue(response.step2.comments, "");
  }
}
