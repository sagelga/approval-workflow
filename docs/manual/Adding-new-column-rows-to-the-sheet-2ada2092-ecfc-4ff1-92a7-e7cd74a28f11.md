# Adding new column & rows to the sheet

To add new column to the sheet, you can do it at anytime. Don't worry. But to add rows, there is some problematic things you should avoid.

1. Stop the compute process before adding new columns or rows. If you don't know how to stop the process, please heck
2. Make sure that adding a new rows generates the correct response ID. Creating a new blank row generates a new response ID, in which they are between two records can create referencing issue.
3.