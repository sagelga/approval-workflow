# Configuration Default Value

/* To view a documentation on how to use each function visit : https://sagelga.github.io/approval-google-var CONFIG = {
      /* How many rows do the sheet have (just for header) */
      headerRow: 1,
    
      /* How many days will it be considered as timeout response */
      responseTimeout: 14,
    
      /* How many steps of approval do you need */
      flow_step: 2,
    
      /* What is the header and inbound sheet name */
      header_sheet: 'Response',
      inbound_sheet: 'Inbounds',
    
      /* What data range do you need, in order to form 'copy of the response' */
      form_column_range: {
        start: 'C',
        stop: 'AS'
      },
    
      /* Email values and subject forming */
      email: {
        step0: {
          subject: {
            request: {
              prefix:
                'MDM User Request ID: ', suffix: ''
            }/* , decline: { prefix: '', suffix: null } */
          }/* , email: null */
        },
        step1: {
          subject: {
            request: {
              prefix:
                'Request for Approval - User Request ID: ', suffix: ''
            }, decline: {
              prefix: 'MDM User Request ID: ', suffix: ''
            }
          }
          /* , email: '' */
        },
        step2: {
          subject: {
            request: {
              prefix:
                'Request for Approval - User Request ID: ', suffix: ''
            }, decline: {
              prefix: 'MDM User Request ID: ', suffix: ''
            }
          },
          email: 'kunanon.s@essilor.co.th'
        },
        step3: {
          subject: {
            request: {
              prefix:
                'Request for Approval - User Request ID: ', suffix: ''
            }/* , decline: { prefix: '', suffix: '' } */
          },
          email: 'kunanon.s@essilor.co.th'
        },
      },
    
      /* What is the approval form url */
      approval_form_url: 'https://docs.google.com/forms/d/e/1FAIpQLSfSrul6h5AVC09WjMsuaSEQq6nWGcZZOGj8VXzJ5UoOa8ABbA/viewform?usp=pp_url&entry.852308180=',
    
      /* In case of an error, where to notify about the error */
      admin_email_address: 'kunanon.s@essilor.co.th',
    }