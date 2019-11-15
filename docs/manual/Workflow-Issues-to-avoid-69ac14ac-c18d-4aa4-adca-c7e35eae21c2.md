# Workflow Issues to avoid

**This is the list of 'don't try this at home' kind of action.** 
In the other word, you can do these following, but you are **not recommended to**. 

The list includes

## Add, move, delete column during script is running

## Cancelling script before it finish

## Edit or reformat during that row is being read

## Deleting a row. Even during the script is running

## Insert column [between information cell range](https://www.notion.so/son9912/CONFIG-Object-66f917819adc43a2a93f21c3ef44b18f)

## Changing header value to the same one as system-required column

When editing a header value, we are strongly suggested not to change its name to the same one as the system-required column. 

Script will try to find the first header value (from left to right) to be column that the script will store value to or pull value from.

In the other word, you should be *avoiding to use the header value twice* in any sheet.