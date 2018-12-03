
# What I've learned

## CanvasAPI

The ```<canvas>``` element creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown.
The canvas is initially blank. 
When no width and height attributes are specified, the canvas will initially be 300 pixels wide and 150 pixels high; default coordinates are 0,0 (top left corner)
To display something, a script first needs to access the rendering context and draw on it. The ```<canvas>``` element has a method called getContext() to obtain the rendering context and its drawing functions. getContext() takes one parameter, the type of context (2d or 3d).

## hsl() 
The hsl() function define colors using the Hue-Saturation-Lightness model (HSL)

Values:

hue: a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue;
saturation: 0% is a shade of gray and 100% is the full color (full saturation);
lightness: 0% is black, 50% is normal, and 100% is white 
