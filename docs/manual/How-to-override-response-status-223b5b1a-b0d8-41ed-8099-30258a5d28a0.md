# How to override response status

Sometimes you want to go with the flow, sometimes you are not. This is how you can force the system to think that the response is approved or rejected. 

Make sure that you are editing in the correct cell and edit with a valid status type.
To learn more about valid status type, click here : [https://www.notion.so/son9912/Understanding-the-status-26659bdf95a8468ba469ff201179e595](https://www.notion.so/son9912/Understanding-the-status-26659bdf95a8468ba469ff201179e595)

## Method One : Edit directly in header cell

Works with all status type. Noted that editing in a non-current status can cause bad consequence.

1. Go to the response row that you want to override
2. Go to the 'current step' of approval (marked with 'Waiting') or any step that will not get skipped.
For more information about response status, please visit the link below.
3. Edit the status of that cell to any valid status value
4. Starts or wait for script to run

## Method Two : Fake a approval response

Only works with 'Waiting' status

1. Go to the inbound sheet
2. Add new record to that sheet, copy the response ID that wants to override the waiting value with
3. Set the result of the approval in the 'Response Result' column to a valid status type