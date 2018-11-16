# What I've learned

## CSS

**box-sizing**
Best practice for box-sizing - makes resetting box-sizing easier:)
https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/


```
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
