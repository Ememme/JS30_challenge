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

**flexbox**

Using flex: 1 on all children element will distribute them evenly along available space.


*Flexbox on child*
```
.container > div {
  /* This: */
  flex: 1 0 auto;

  /* Is equivalent to this: */
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
```

**taking elements off-screen with transform: translateY**

```
.panel>*:first-child {
  transform: translateY(-100%);
}
```

**transitionend**

It is possible to attach an event listener for the transitionend event and use it with a function, just like with 'click'. Note: as there are many properties that can be transformed, it is vital to check property-name that triggers the function.
