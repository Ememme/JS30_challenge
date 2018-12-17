# What I've learned:

## HTML

### offsetWidth
The HTMLElement.offsetWidth read-only property returns the **layout width** of an element as an integer.
It is a measurement in pixels of the element's CSS width, including any borders, padding, and vertical scrollbars (if rendered), but 
does not include the width of pseudo-elements (::before or ::after).

If the element is hidden (f.ex by style.display: 'none' ), then 0 is returned.

### offsetLeft
The number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.




### MouseEvent: offsetX, offsetY

Offset in the X/Y coordinates of the mouse pointer between that event and the padding edge of the target node. 
`OffsetX` and `offsetY` are relative to the parent container, whereas `pageX` and `pageY` are relative to the document.

### currentTarget vs target
`currentTarget` always refers to the element to which the event handler has been attached, as opposed to `event.target` which identifies the element on which the event occurred.