# Edit email templates

A template for email consists of

- Subject
- Body

In which these are "hardly" defined in the configuration file and the script.

If you liked to change the current template to suites your need, here's what you can do

## Editing the subject

In `Email.js` file, there will be functions for each type of email. 
In line of `subject` variable, as seen in exhibit below

    var subject = getSubjectField(response, {
        prefix: CONFIG.email.step1.subject.decline.prefix,
        suffix: CONFIG.email.step1.subject.decline.suffix
    });

A prefix and suffix is defined with the default template value (which is `CONFIG.email.step1.subject.decline`)

If you liked to change the subject line prefix (or adding values to subject line suffix), you can set the values in the configuration file.

If you want to edit further than this point, you will have to go edit the `getSubjectField()` as you are editing a new subject template that all functions in `Email.js` will follow

or compose a new value of subject by re-designate the `subject` variable.

## Editing the body

If you liked to change the body, here's what you can do

### Editing it Globally

Go to `EmailFunction.js` → `getBodyField()`

By using HTML language, you can edit the `<table>` or other elements that is considered as body in there.

Do mind that editing in getBodyField() applies to all emails format.

### Editing it to only 1 email format