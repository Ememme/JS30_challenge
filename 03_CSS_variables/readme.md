# What I've learned

## HTML

**input range**

Slider with default values of the minimum (0) and maximum (100). The default value is halfway between the specified minimum and maximum. If the user's browser doesn't support type "range", it will fall back and treat it as a "text" input.


### Typical use cases:

Audio controls (volume, balance);
Filter controls for images (blur, greyscale, invert, etc.)
Color configuration controls such as color channels, transparency, brightness, etc.
Game configuration controls (difficulty, visibility distance)


**input color**

Color picker.

*CSS variables*

1. Define variable with keyword :root
2. Set up values by using --

f.ex.

:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

3. To apply variable on a chosen property:

  background: var(--base);


**filter**

The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;

### Steps:

#### CSS:

Declare style for the :root element and three variables inside the style definition for :root with the same names as the input HTML elements. CSS3 variables are declared in the following syntax format:

/* Two hyphens (--) followed by the variable name */

:root {
  --base: #ffc600;
  --blur: 10px;
  --padding: 10px;
}
Declare a new style for the img element and set the background, filter, and padding properties to the variables we defined at the root element:

/* 'var(--variableName)' to use previously defined CSS properties */

img {
  background: var(--base);
  filter: blur(var(--blur));
  padding: var(--padding);
}


#### JS:

Declare & define a variable as a reference to all of the inputs on the page.

Iterate through the HTML Node Elements that the variable is referencing and attach event listeners to each one that will call on an event handler whenever the input value has been changed (the change event).

Repeat step 2, listening for mouse movements on the inputs instead of value changes (the mousemove event).

Define a function that will be used as the event handler to update the value of the CSS3 variable at the root document level, corresponding with the name property of the input element which called this function.

NOTE: Properties like padding and blur won't update because the value from the input does not include the type of measurement used ('px', 'em', etc.). The input HTML elements also have a data-sizing property if they require a suffix -use this to attach the correct suffix to the value if necessary.
