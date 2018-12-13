# What I've learned

## HTML VIDEO API

Embedded on website with ```<video> ```element.
Multiple sources inside nested ```<source>``` elements can be provided, and the browser will use the first one it understands.
 
## Media Events:

- play()
- pause()
- timeUpdate() : The time indicated by the element's currentTime attribute has changed.


HTMLMediaElement Properties:

- ``controls`` displays user interface controls for playing the media item
- volume
- playbackRate 
- currentTime
- duration

## dataset
dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-*) set on the element.

Attributes can be set and read like this:
- element.dataset.keyname
- element.dataset[keyname]

When an attribute is set, it's value is always **converted** into a **string**. (Null is converted into the string "null").
To remove an attribute, use the delete operator: ``delete el.dataset.dateOfBirth;``