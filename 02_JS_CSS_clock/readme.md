# What I've learned



## CSS


*transform origin*
- the point around which a transformation is applied.
For example, the transformation origin of the rotate() function is the center of rotation(default value: 50%).

Changing it to transform-origin: 100% will change pivot point in x-axis.

*transition-timing-function*
- how intermediate values are calculated for CSS properties being affected by a transition effect
- the speed of the transition can vary over transition duration


## JS


Date() object and handy built-in methods:

f.ex const now = new Date()

.getSeconds()
.getHours()
.getMinutes()


### Steps:

1. CSS - Hands position: stack divs on one another.
2. JS - use built-in Date object and getSeconds() method to get values
3. Reference time to degrees and remember to account for offset the initial rotation.  
