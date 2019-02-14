# What I've learned

## Tips and tricks

Logging values as object
console.log({x, y}) to get variables and their values

If elements have 'name' attribute, it's possible to target them directly without having to store the in a variable
f.ex. document.formName.addEventListener('', someFunction);

## Working with Date object

`Date.now()` static method replaced `new Date().getTime();`
it returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

`Date.getMonth()`
returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year, January = 0).

If needed, the full name of a month can be obtained by using `Intl.DateTimeFormat()` with an options parameter. 
Using this method, internationalization is made easier:

var options = { month: 'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
// December