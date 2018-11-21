# What I've learned

## CSS
```outline```: CSS shorthand property for ```outline-style```, ```outline-width```, and ```outline-color```.
Borders vs outlines:

* Outlines never take up space, as they are drawn outside of an element's content.
* According to the spec, outlines don't have to be rectangular, although they usually are.
* outline of 0 or none **will remove** the browser's default **focus** style. If an element can be interacted with, it must have a visible focus indicator. Provide obvious focus styling if the default focus style is removed.


```perspective``` 
CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. 
Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. 
The strength of the effect is determined by the value of this property.
/* transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001); */
The **vanishing point** is by default placed at the center of the element, but its position can be changed using the ```perspective-origin``` property.

## JS

### fetchAPI

- built-in browser feature that returns a Promise
- it doesn't recognize the data type it returns (can be json, image, audiofile, etc), that is why in first step we call `````.json()````` method on it 
(note: ```JSON.parse()``` doesn't work as the response is already a parsed object!)

### ```str.match(regexp)```

The match() method retrieves the matches when matching a string against a regular expression.

If there are matches, an Array containing the entire matched string as the first element is returned, followed by any results captured in parentheses. 
If there are no matches, ``null`` is returned.

### eventListener: change

Depending on the way user interacts with the element, the event fires at different moments:

1) element is :checked (by clicking or using the keyboard) for ```<input type="radio"> ```and ```<input type="checkbox">```
2) user commits the change explicitly (e.g. by selecting a value from a ```<select>``` dropdown with a mouse click, a date from a date picker for ```<input type="date">```, a file for ```<input type="file">```
3) element loses focus after its value was changed, but not commited (e.g. after editing the value of ```<textarea>``` or ```<input type="text">```

### .replace()
This method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
