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
Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data. This is to ensure that the data remain intact without modification during transport. Base64 is commonly used in a number of applications including email via MIME, and storing complex data in XML.

Base64 was first suggested as an encoding stream for MIME data in an email rather than HTTP.

How does it work?
A byte consist of 8 bits. When encoding, Base64 will divide the string of bytes into groups of 6 bits and each group will map to one of 64 characters. These 64 characters are the in the Base64 character table.

If the string of bytes cannot be divided into exact number of groups of 6 bits, padding will be involved so that the padded string will be groups of 24 bits and then the encoding will be applied to the padded string. If a group of 6 bits is fully padded(doesn't contain any bit from original bit), it will be mapped to "=" in the encoded string.

Since Base64 uses a character to represent 6 bits of data, so the size of Base64 encoded data will be 33% larger than the original data. 

Source: https://www.pixelstech.net/article/1457585550-How-does-Base64-work