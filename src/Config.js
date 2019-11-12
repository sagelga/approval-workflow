/* To view a documentation on how to use each function visit : https://sagelga.github.io/approval-google-addons/ */

var CONFIG = {
  /* How many rows do the sheet have (just for header) */
  headerRow: 1,

  /* How many days will it be considered as timeout response */
  responseTimeout: 14,

  /* How many steps of approval do you need */
  flow_step: 2,

  /* What is the header and inbound sheet name */
  header_sheet: "Response",
  inbound_sheet: "Inbounds",

  /* What data range do you need, in order to form 'copy of the response' */
  form_column_range: {
    start: "C",
    stop: "AT"
  },

  /* Email values and subject forming */
  email: {
    // STEP 0 = Requester
    step0: {
      subject: {
        request: {
          prefix: "Request ID: ",
          suffix: ""
        } /* , decline: { prefix: '', suffix: null } */
      } /* , email: null */
    },
    // STEP 1 = Manager
    step1: {
      subject: {
        request: {
          prefix: "Request for Approval - Request ID: ",
          suffix: ""
        },
        decline: {
          prefix: "Request ID: ",
          suffix: ""
        }
      }
      /* , email: '' */
    },
    // STEP 2 = FMA_Asia
    step2: {
      subject: {
        request: {
          prefix: "Request for Approval - Request ID: ",
          suffix: ""
        },
        decline: {
          prefix: "Request ID: ",
          suffix: ""
        }
      },
      email: "example@example.com"
    },
    // STEP 3 = FMA_MDM
    step3: {
      subject: {
        request: {
          prefix: "Request ID: ",
          suffix: ""
        } /* , decline: { prefix: '', suffix: '' } */
      },
      email: "example@example.com"
    }
  },

  /* What is the approval form url */
  approval_form_url:
    "https://docs.google.com/forms/d/e/<form_id>/viewform?usp=pp_url&entry.<entry_id>=",

  /* In case of an error, where to notify about the error */
  admin_email_address: "example@example.com",

  /* When testerMode is on, all emails will not be sent to real responder, but sent to you (set by admin_email_address)
  and logging will not constantly send logs of actions made in the script. */
  testerMode: true
};
