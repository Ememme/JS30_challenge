#What I've learned

## HTML VIDEO API

Embedded on website with ```<video> ```element.
Multiple sources inside nested ```<source>``` elements can be provided, and the browser will use the first one it understands.
 
## Manipulating video using canvas

By combining the capabilities of the video element with a canvas, video data can be manipulated in real time to incorporate a variety of visual effects to the video being displayed.


steps to do that:

1. Within `<video>` element create context to display the current frame of the original video
2. Fetch the width and height of the video and set canvas width and height accordingly.
3. Draw onto the canvas by providing a valid canvas image source (image element, bitmap, a video element, etc.)
4. To manipulate the image using the input HTML elements, get access to the underlying pixel data from  calling
the ```getImageData()```
The ImageData object returned is the underlying raw pixel data for the current canvas image. 
5. To use the custom size specify the scale parameters using the element's width and height properties, 
f.ex. on top in the corner:
ctx.drawImage(this, 0, 0, this.width, this.height);


##Media events
### event 'canplay'

The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.

### loadeddata	
The first frame of the media has finished loading.

### Base64
Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data. This is to ensure that the data remain intact without modification during transport. Base64 is commonly used in a number of applications including email via MIME, and storing complex data in XML.



