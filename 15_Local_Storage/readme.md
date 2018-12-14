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
## JS: localStorage



