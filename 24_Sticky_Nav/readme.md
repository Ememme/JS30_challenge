# What I've learned

## CSS
`position: fixed`: 

'Floats' on site, doesn't take up space so elements below it will use that space.
To counter that, add `offsetHeight` + 'px' to padding of an element that is below

`width` vs `max-width`

use max-width when the element needs to be animated\transitioned

## HTML

`HTMLElement.offsetTop`
distance of the current element relative to the top of the offsetParent node.

`offsetHeight`
returns the integer = height of an element with vertical padding and borders.

offsetHeight is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered), does not include the height of pseudo-elements such as ::before or ::after.

If more precise (fractional) value needed, use `element.getBoundingClientRect()`.

## Event:

`scroll`:fires when the document view or an element has been scrolled.

`window.scrollX`
number of pixels that the document is currently scrolled horizontally
pageXOffset property is an alias for the scrollX property:

window.pageXOffset == window.scrollX; // always true

`window.scrollY`
number of pixels the document is scrolled vertically 