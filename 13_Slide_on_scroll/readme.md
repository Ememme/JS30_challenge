# What I've learned

## CSS

```float``` vs ```position-absolute```

An element that is *absolutely* positioned is taken out of the flow => other elements are positioned as if it did not exist.
With ``float`` element is removed from the normal flow of the page, but remains a part of the flow.

``scale``

The scale()
 function defines a transformation that resizes an element on the 2D plane. Scaling is defined by a vector, so it can resize the horizontal and vertical dimensions at different scales.
 scale(sx):  preserves the element's aspect ratio
 
 scale(sx, sy): allows to scale dimensions differently
 
 
 ## JS
 
 
 
 ### debouncing function
 
- function that ensures a given task doesn't fire so often that it bricks browser performance.
- limits the rate at which a function can fire in miliseconds 

## DOMEvent: scroll

``scrollY``, ``scrollX``
- read-only properties of the Window interface 
- returns the number of pixels that the document is currently scrolled vertically/horizontally.


```offsetTop```
- read-only property of the VisualViewport interface 
- returns the offset of the top edge of the visual viewport from the top edge of the layout viewport in CSS pixels.