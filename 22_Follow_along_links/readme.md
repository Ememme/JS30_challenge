# What I've learned 

## .getBoundingClientRect
```Element.getBoundingClientRect() ``` returns the size of an element and its position relative to the viewport.
Returned value is a DOMRect object - union of the rectangles returned by getClientRects() for the element, 
i.e., the CSS border-boxes associated with the element. 

The result is the *smallest rectangle* which contains the entire element, with read-only properties describing the overall border-box in pixels [left, top, right, bottom, x, y, width, and height properties]
Properties other than width and height are relative to the top-left of the viewport.

To account for current position, add the current scrolling position to the top and left properties (window.scrollX and window.scrollY)

Read more: https://www.bennadel.com/blog/3441-translating-viewport-coordinates-into-element-local-coordinates-using-element-getboundingclientrect.htm

## translate()

Instead of defining directly the top and left properties, we used ``tranalate()`` to achieve a smoother animation effect. 
The  CSS translate()function repositions an element in the horizontal and/or vertical directions. 

``translate()`` is specified as either one or two values.

1. translate(tx)

2. translate(tx, ty)