# What I've learned

## HTML data-* attribute:

Introduced in HTML5, data-* attribute (where * can be ANYTHING you want) allows us to store custom data on any HTML element. In the exercise, each div.key (<div class="key" data-key="...">) and audio element has a data-key attribute that corresponds to a keyboard button.

## HTMLMediaElement method play()
It returns a Promise which is resolved when playback has been successfully started.


CSS:
When using flexbox, remember to add specific height to make it work properly
(Couldn't achieve desired result by using only align-items: center;
justify-content: center;)

## transform
transform CSS property allows to rotate, scale, skew, or translate a given element.


## TransitionEvent:

interface that represents events providing information related to CSS transitions; note: border-color transition will be represented as 4 distinct transition events for border-left, border-right, border-top, border-bottom


## transitionend event:

it is is fired when a CSS transition has completed.
In the case where a transition is removed before completion ( transition-property is removed or display is set to "none"), the event will not be generated. In this exercise it is used to remove styling added on keyDown.
The transitionEvent object   


### Steps:

1. Add an event listener to window object that is listening for a keydown event and create a function that accepts **EVENT** parameter.

2. Declare variables (const!) that reference the div and audio elements that correspond to the keypress which triggered the function (if such elements exist).

3. If the key pressed doesn't match one of the keys defined on the audio file, stop function execution.

4. If there is a match, add the "playing class" to it by **classList.add('name-of-the-class')**.
This will add the required changes, but does not stop animation.

5. To end the animation, it is possible to use setTimeOut, but not recommended.
Instead, use transitionEvent object

6. Declare variable that holds reference to all key elements and set up event listeners for them. As it is a NodeList, we must iterate through all the elements and add an event listener that will fire on the transitionend event, and a function responsible for removing the ".playing" class.

Event handler fires when the transition animation completes. The event provided to the function as an argument contains a reference to the **TransitionEvent** with the CSS property's name which was transitioned into.
Check for **transform** property, as this property defines the length of animation.
If there is an event with a property name transform, target the function context (the HTML element to which the event listener was attached) and remove the playing class.
