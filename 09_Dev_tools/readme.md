# What I've learned

## Debugging 

To find what triggers change on element
    **Inspect > Break on > Attribute modification**
This will run in debugger and pause exactly on where JS is making changes

## console

### Filter the logs:

* ```console.info()```
* ```console.warn()```
* ```console.error()```

### Tests with ```console.assert()```
Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

### ``console.dir()``
is the way to see all the properties of a specified JavaScript object in console & easily get the properties of the object.

### ``console.count()`` 
to count the number of times of a value.

### Timers: ```console.time``` 
to see how long a certain activity takes, f.ex. with fetch
Timers:

 console.time('fetching data');
fetch('https://api.github.com/users/ememme')
   .then(data => data.json())
   .then(data => {
      console.log(data);                 
      console.timeEnd('fetching data');  // fetching data: 461.976ms
   });





