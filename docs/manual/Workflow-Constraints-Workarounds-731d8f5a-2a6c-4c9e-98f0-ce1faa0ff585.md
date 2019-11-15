# Workflow Constraints & Workarounds

This is the list of all constrains that exists in the script. 
Make sure that you did not do things as following, as the data retrieval or update can create a bigger issue.

# Cannot delete system-required column header or whole column

Root cause : Script Design

## Problem

Cannot delete the system required column without causing an error

## Cause

It is required by the script in order to work properly.

## Workaround

Go create a system required column. 
If you don't know how to, please check out 

---

# Cannot edit/delete system-required sheet or modifying sheet name

Root cause : Script Design

## Problem

Cannot delete the system required sheet or modifying a sheet name without causing an error

## Cause

It is required by the script in order to work properly.

## Workaround

You **cannot** delete the sheet that is required by the system.

You **can** modify the sheet name by editing it in Google Sheets and Configuration file. Please read about how to edit a configuration file in the documentation and configuration file documentation.

---

# Cannot insert or move a row between the record

Root cause : Human Understanding

## Problem

You should not insert or move any row between the response record. It will cause the response ID to recalculate and may looking for inbound that have the same IDs. 

Any same ID in the header does not make error, but just correction of the data is wrong.

## Cause

Response ID is relied heavily on row number. Change of the row number can cause the response ID to be changed.

## Workaround

If the response ID is changed, no worries. But to the response in the inbound, that must be changed to 'respond to the new response ID'.

---

# Email sending status is unknown by system

Root cause : Google

## Problem

User has sent a form, but typing on the responder that does not exist. 

## Cause

GMail does not alert back when the email that has been sent is being delivered correctly or not.

## Workaround

- Checked in the mailbox

    If the email is invalid, Google will send a reply to the sender, marking that the email is invalid. You can check and redo the sending.

- Checked from timeout abnormality

    If the email has not been sent, the approval will not go through. So, approvals that take too long to respond may caused by this issue. Resend the emails or directly contact them.

---

# Cannot change data type in system-required column

Root cause : Script Design

## Problem

Changing data type cause the inability to retrieve data (as they changed its property to new type)

## Cause

Google Sheets data retrieval changes return type that matches the cell data type

## Workaround

none. yet.

---

# No support of footer row

Root cause : Script Design

## Problem

Script will try to run every row, from the first row (excluding the header row) to the last row

## Cause

Script does not support a footer row

## Workaround

none. yet.

---

# Unexpected change of the current status

Root cause : Human Understanding

## Problem

Script does not understand what is 'Waiting' in step 1 and 'Approved' in step 2. Script will understands it as 'Waiting' in step 1

## Cause

Manual change of status value in that response

## Workaround

Fix the status set into a understandable format

---