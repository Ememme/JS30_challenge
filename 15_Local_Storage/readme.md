# What I've learned:

## CSS: custom styling input

1.Hide built-in checkboxes:

```
// hide original boxes
    .plates input {
      display: none;
    }
```

2.Style for unchecked:

```
    .plates input + label:before {
      content: '⬜️';
      margin-right: 10px;
    }
```

3.Style for checked:

````
   .plates input:checked + label:before {
      content: '🌮';
    }
````

## HTML

### reset() on a form
- restores a form element's default values ( the same as clicking the form's reset button);

If a form control (such as a reset button) has a *name* or *id* of **reset** it will mask the form's reset method. It does not reset other attributes in the input, such as disabled.

## JS: localStorage

localStorage: key- value store, only acceptable data format is String!

If the data provided is not a String, the browser calls .toString() on a provided data, which results in "object Object".
To avoid that: use JSON.stringify(data); the opposite action (string to object) JSON.parse('string_data');

`localStorage` property allows to access a Storage object for the Document's origin; 
the stored data is saved across browser sessions, it has no expiration time.

Syntax:

1.Adding data to storage: setItem('key', 'value')

`localStorage.setItem('myCat', 'Boruc')`; // 

2.Accessing data: getItem('key);

`localStorage.getItem('myCat');`

3.Remove data item: removeItem('key');

`localStorage.removeItem('myCat');`

4.Clearing storage: clear();

`localStorage.clear();`










