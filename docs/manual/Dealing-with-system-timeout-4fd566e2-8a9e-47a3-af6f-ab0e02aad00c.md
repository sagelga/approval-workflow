# Dealing with system timeout

System timeout is normally generated when the runtime of the current operation reaches 30 minutes (1800 second). Google will stop all process being calculated and will not doing anything.

Tested with normal request, it takes 3 seconds to go around each row. In the other hand, leaving the system with 600 request to run at the same time can cause havoc and system timeout. But that large amount of request is quite 'not going to happen' , so you don't have to worry that much.

System will restart the task and *will not start from where its left* (just for now) and fix the unfinished task based on the status it is currently on.

Normally, dealing with the system timeout is nothing you can do much. What you can do is to improve it from 'not going timeout'. Here's some few examples you can try: 

# How to improve runtime

## Example One : Check whether there is a 'long gone' request

More 'Waiting' status response = more runtime. Try check if the responder of that step has received the email address. Some of the request inputs the invalid email address line, so the email has been sent to the wrong responder, causing the 'long gone' request.

## Example Two : Remove old requests and responses

Less data means more speed (just for now). But it doesn't help that much, as the script is checking at a batch rate (not single line rate).

To improve the speed for this example, remove the request that is being duplicated. Duplicates of the response id can slow things down dramatically, as they will be check individually for a perfect match. 

Other thing you can try is to check that the responder use the same email address as the request's approver email address.

Any more suggestions of how to improve the runtime is appreciated. Thanks!