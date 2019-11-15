# Quotas for Apps Service

[https://developers.google.com/apps-script/guides/services/quotas#current_limitations](https://developers.google.com/apps-script/guides/services/quotas#current_limitations)

![devsite-google-blue.png](devsite-google-blue-d004e14b-76cf-4a32-8160-1254681c21fe.png)

Newly created G Suite domains are subject to the consumer limit for the first billing cycle if they have six or more users, or several billing cycles if they have fewer users. For more information, see the Help Center page on [sending limits](https://support.google.com/a/answer/166852).

## Current limitations

The table below lists hard limitations as of August 2018. The limits shown below are provided solely to assist you in testing scripts. All limits are subject to elimination, reduction, or change at any time, without notice.

[Untitled](./Untitled-eb87f56f-aa93-4485-bdc9-25416eca8a7b.csv)

## Flexible Quotas Early Access

This feature is part of the [Early Access feature set](https://developers.google.com/apps-script/guides/apps-script-eap). As such only some developers currently have access to it.

Normally, if a script execution exceeds one of the above quotas or limitations, the script execution stops and an appropriate error message is returned. This can potentially leave the script's data in an undefined state.

Under the flexible quota system, such hard quota limits are removed. Scripts do not stop when they reach a quota limit. Rather, they are delayed until quota becomes available, at which point the script execution resumes. Once quotas begin being used, they are refilled at a regular rate. For reasonable usage, script delays are rare.

## Exception messages

If a script reaches a quota or limitation, it will throw an exception with a message similar to the following:

- `Limit exceeded: Email Attachments Per Message.` This indicates that the script exceeded one of the quotas or limitations listed above.
- `Service invoked too many times: Calendar.` This indicates that the script called the given service too many times in one day.
- `Service invoked too many times in a short time: Calendar. Try
Utilities.sleep(1000) between calls.` This indicates that the script called the given service too many times in a short period.
- `Service using too much computer time for one day.` This indicates that the script exceeded the total allowable execution time for one day. It most commonly occurs for scripts that run on a [trigger](https://developers.google.com/apps-script/understanding_triggers), which have a lower daily limit than scripts executed manually.
- `Script invoked too many times per second for this Google user account.` This indicates that the script began executing too many times in a short period. It most commonly occurs for custom functions that are called repeatedly in a single spreadsheet. To avoid this error, code your custom functions so that they only need to be called once per range of data, as explained in the [guide to custom functions](https://developers.google.com/apps-script/execution_custom_functions).
- `There are too many scripts running simultaneously for this Google user
account.` This indicates that you have too many scripts executing at once, although not necessarily the same script. Like the exception above, this most commonly occurs for custom functions that are called repeatedly in a single spreadsheet.