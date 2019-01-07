#What I've learned

## Navigator
Navigator interface represents the state and the identity of the user agent.
It allows scripts to query it and to register themselves to carry on some activities.
(Access to info about location, access to microphone, camera, etc)

## Geolocation
The Geolocation interface represents an object able and allows to obtain the position of the device. 
It gives Web content access to the location of the device and allows a Web site/app to offer customized results based on the user's location.

An object with this interface is obtained using the *navigator.geolocation* property implemented by the Navigator object
and is available ONLY in secure contexts (HTTPS).


## Geolocation.watchPosition()
Method used to register a handler function called automatically each time the position of the device changes. 
The user's location is described using a *Position* object referencing a *Coordinates* object.


## Coordinates.heading
represents the direction in which the device is traveling. 
Heading value is specified in degrees and indicates how far off from north the device is. 
Zero degrees represents true true north, and the direction is clockwise (east is 90 degrees and west is 270 degrees). 
If Coordinates.speed is 0, heading is NaN. If the device is not able to provide heading information, this value is null.