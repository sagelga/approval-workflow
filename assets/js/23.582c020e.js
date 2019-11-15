(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(e,n,s){"use strict";s.r(n);var t=s(0),l=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("/**\n*")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("@param {*} i\n"),s("em",[e._v("/\nfunction approveResponse(i) {\ntry {\n/")]),e._v(' Create Response object. Works like Class, but they have no functions. */\nvar response = {\npayloads: {\nskipRow: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Skips Override", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\ntimestamp: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Timestamp", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nrowNumber: i\n}\n};')]),e._v(" "),s("p",[e._v("/* Check wheather the row is manually skipped or there is actually a new record in the last row / current row */\nif (\nsheet.getRange(response.payloads.skipRow.cell).getValue() ||\n!sheet.getRange(response.payloads.timestamp.cell).getValue()\n) {\nreturn;\n}")]),e._v(" "),s("p",[e._v('/* Then add other payloads to it, if it is a valid thing */\nresponse.step1 = {\nstatus: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 1 Status", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\ntimestamp: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 1 Timestamp", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\ncomments: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 1 Comments", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nformUrl: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 1 Response Form URL", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nemail: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("User\'s manager email address", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n}\n};')]),e._v(" "),s("p",[e._v('response.step2 = {\nstatus: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 2 Status", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\ntimestamp: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 2 Timestamp", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\ncomments: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 2 Comments", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nformUrl: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Step 2 Response Form URL", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nemail: {\nvalue: CONFIG.email.step2.email,\ncell: null\n}\n};')]),e._v(" "),s("p",[e._v("response.step3 = {\nstatus: {\nvalue: null,\ncell: null\n},\ntimestamp: {\nvalue: null,\ncell: null\n},\ncomments: {\nvalue: null,\ncell: null\n},\nformUrl: {\nvalue: null,\ncell: null\n},\nemail: {\nvalue: CONFIG.email.step3.email,\ncell: null\n}\n};")]),e._v(" "),s("p",[e._v('response.payloads = {\nid: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Response ID", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nskipRow: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Skips Override", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nemail: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Email Address", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nrequestType: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Request Type", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\ntimestamp: {\nvalue: null,\ncell:\ncolumnToLetter(\ngetColumnNumber("Timestamp", {\nrowNumber: 1,\nsheetObject: sheet\n})\n) + i\n},\nrequestTimeout: null,\nbodyField: null,\nrowNumber: i\n};')]),e._v(" "),s("p",[e._v("/* Tester Checkpoint */\n// Logger.log(response);")]),e._v(" "),s("p",[e._v("/* Retrive the value from the cell */\nresponse = pullValue(response);")]),e._v(" "),s("p",[e._v("/* Create a request Id, if needed */\nif (!response.payloads.id.value) {\nresponse = generateId(response);\n}")]),e._v(" "),s("p",[e._v("/* Tester Checkpoint */\nLogger.log(response);")]),e._v(" "),s("p",[e._v("/* When the status is rejected in one of the status level -> send emails of rejection "),s("em",[e._v('/\nif (\nresponse.step1.status.value === "Reject" ||\nresponse.step2.status.value === "Reject"\n) {\nstepRejected(response);\n} else if (response.step1.status.value === "Waiting") {\n/')]),e._v(" Starting to check the current response status "),s("em",[e._v('/\nstepOneWaiting(response);\n} else if (response.step1.status.value === "Approve") {\nif (response.step2.status.value === "Waiting") {\nstepTwoWaiting(response);\n} else if (response.step2.status.value === "Approve") {\n/')]),e._v(" When response have been approved by both step1 and step2, send emails to step3 "),s("em",[e._v("/\nstepApproved(response);\n} else {\n/")]),e._v(" If nothing applies, apply it like it is '' "),s("em",[e._v("/\nstepTwoApproval(response);\n}\n} else {\n/")]),e._v(' When the status line is not readable by the system, make it \'\' */\nnewEntry(response);\n}\n} catch (error) {\nconsole.error("approveResponse() : " + error);\nconsole.log("response: " + response);\nconsole.log("i: " + i);')]),e._v(" "),s("p",[e._v('sendEmails(\nCONFIG.admin_email_address,\n"Row " + i + " caused a fatal error",\nerror\n);\n}')])])]),e._v(" "),s("p",[e._v("/**")]),e._v(" "),s("ul",[s("li",[e._v("Runs when the email has been sent to the manager (step1 responder)")]),e._v(" "),s("li",[e._v('@param {*} response\n*/\nfunction stepOneWaiting(response) {\npushValue(response.step1.timestamp, new Date());\npushValue(response.step1.comments, "Checking Inbounds...");\nvar result = getStatusInbound(\nresponse.payloads.id.value,\nresponse.step1.email.value\n);')])]),e._v(" "),s("pre",[s("code",[e._v('/* Calculate deadlines and skip the row when the time is out */\ndeadline =\n  response.payloads.timestamp.value - response.step1.timestamp.value;\nif (deadline <= 0) {\n  sendEmails(\n    CONFIG.admin_email_address,\n    "Response ID : " +\n      response.payloads.id.value +\n      " takes too long to respond",\n    ""\n  );\n  pushValue(response.payloads.skipRow, "Time out");\n}\ndeadline = milisecToTime(deadline);\n\nif (result) {\n  pushValue(response.step1.status, result.status);\n  pushValue(response.step1.timestamp, result.timestamp);\n  pushValue(response.step1.comments, result.comments);\n} else {\n  pushValue(response.step1.comments, "Time left : " + deadline);\n}\n')])]),e._v(" "),s("p",[e._v("}")]),e._v(" "),s("p",[e._v("/**")]),e._v(" "),s("ul",[s("li",[e._v("Runs when step 1 status is Approved, and requires next step to take action")]),e._v(" "),s("li",[e._v('@param {*} response\n*/\nfunction stepTwoWaiting(response) {\npushValue(response.step2.timestamp, new Date());\npushValue(response.step2.comments, "Checking Inbounds...");\nvar result = getStatusInbound(\nresponse.payloads.id.value,\nresponse.step2.email.value\n);')])]),e._v(" "),s("pre",[s("code",[e._v('/* Calculate deadlines and skip the row when the time is out */\ndeadline =\n  response.payloads.timestamp.value - response.step2.timestamp.value;\nif (deadline <= 0) {\n  sendEmails(\n    CONFIG.admin_email_address,\n    "Response ID : " +\n      response.payloads.id.value +\n      " takes too long to respond",\n    ""\n  );\n  pushValue(response.payloads.skipRow, "Timed out");\n}\ndeadline = milisecToTime(deadline);\n\nif (result) {\n  pushValue(response.step2.status, result.status);\n  pushValue(response.step2.timestamp, result.timestamp);\n  pushValue(response.step2.comments, result.comments);\n} else {\n  pushValue(response.step2.comments, "Time left : " + deadline);\n}\n')])]),e._v(" "),s("p",[e._v("}")]),e._v(" "),s("p",[e._v("/**")]),e._v(" "),s("ul",[s("li",[e._v("Starts when one of the step have declined the request")]),e._v(" "),s("li",[e._v("@param {*} response\n"),s("em",[e._v("/\nfunction stepRejected(response) {\n/")]),e._v(' Check wheather who rejects the response */\nif (response.step2.status.value === "Reject") {\nstepTwoRejectEmail(response);\npushValue(response.payloads.skipRow, "Rejected in Step 2");\n} else {\nstepOneRejectEmail(response);\npushValue(response.payloads.skipRow, "Rejected in Step 1");\n}\n}')])]),e._v(" "),s("p",[e._v("/**")]),e._v(" "),s("ul",[s("li",[e._v("Starts when all of the steps have approved the request")]),e._v(" "),s("li",[e._v('@param {*} response\n*/\nfunction stepApproved(response) {\nsendFinalEmail(response);\npushValue(response.payloads.skipRow, "Approved");\n}')])]),e._v(" "),s("p",[e._v("/**\n*")]),e._v(" "),s("ul",[s("li",[e._v("@param {*} response\n"),s("em",[e._v("/\nfunction newEntry(response) {\n/")]),e._v(" Set the formURL to the response ID */\npushValue(\nresponse.step1.formUrl,\nCONFIG.approval_form_url + response.payloads.id.value\n);")])]),e._v(" "),s("pre",[s("code",[e._v('pushValue(response.step1.comments, "Sending email to requester");\nsendRecieptEmail(response);\npushValue(response.step1.timestamp, new Date());\npushValue(response.step1.comments, "Email sent to requester");\n\n/* Sending emails to the corresponding user */\npushValue(response.step1.comments, "Sending approval email ...");\nstepOneApprovalEmail(response);\npushValue(response.step1.timestamp, new Date());\npushValue(response.step1.comments, "Email sent to approver");\n\npushValue(response.step1.status, "Waiting");\npushValue(response.step1.timestamp, new Date());\npushValue(response.step1.comments, "");\n')])]),e._v(" "),s("p",[e._v("}")]),e._v(" "),s("p",[e._v("function stepTwoApproval(response) {\n/* Set the formURL to the response ID */\npushValue(\nresponse.step2.formUrl,\nCONFIG.approval_form_url + response.payloads.id.value\n);")]),e._v(" "),s("pre",[s("code",[e._v('pushValue(response.step2.comments, "Sending email to Approver 2 ...");\nstepTwoApprovalEmail(response);\npushValue(response.step2.timestamp, new Date());\npushValue(response.step2.comments, "Email sent");\n\n/* Sending emails to the corresponding user */\npushValue(response.step2.status, "Waiting");\npushValue(response.step2.timestamp, new Date());\npushValue(response.step2.comments, "");\n')])]),e._v(" "),s("p",[e._v("}\n}")])])}),[],!1,null,null,null);n.default=l.exports}}]);