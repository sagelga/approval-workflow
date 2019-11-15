# How to add new column in a form & editing information row

When you have to add more form response, Google Forms will automatically adds more column to the sheet, making the reading of the form response went wrong. Here's what happened

1. Google Forms adds new column to the 'header' sheet.
= Script is not covering the new column that have been added
2. Script runs, pulling the data from `CONFIG.form_column_range.start` to `CONFIG.form_column_range.stop`. In which the new column is not in this range, or existing column is not covered in this range.
3. Response body of the sent email does not contains the new or existing column

Here's how you can fix the issue

To learn more about configuration, 
please read [https://www.notion.so/son9912/CONFIG-Object-66f917819adc43a2a93f21c3ef44b18f](https://www.notion.so/son9912/CONFIG-Object-66f917819adc43a2a93f21c3ef44b18f)

1. In `CONFIG.form_column_range`, at `start` key, change the value to the first column (in A1 Notation)
2. In `CONFIG.form_column_range`, at `stop` key, change the value to the last column (in A1 Notation)