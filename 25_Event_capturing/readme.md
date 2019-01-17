# What I've learned

## Event capturing and bubbling

Given the following structure of nested divs
```
<div class="one">
	<div class="two">
		<div class="three">
		</div>
	</div>
</div>
```

divs.forEach(div => div.addEventListener('click', logText));

1. The user clicks the <div class="three">.

2. The browser goes from the most external element to the deepest one and captures all off the events binded to them. 
This process is called Event Capture and its aim is to find the element that has been clicked.

The browser stores the events in this order
// Event attached to <div class="one">
// Event attached to <div class="two">
// Event attached to <div class="three">

At this moment the events are not fired yet. Starting from the bottom, the browser does 'bubbling' up and fires each of these events:

// The browser fires the events in this order
// Event attached to <div class="three">
// Event attached to <div class="two">
// Event attached to <div class="one">

It can be changed with `capture` property:

divs.forEach(div => div.addEventListener('click', logText, {
	capture: true   	// by default is false
}));
Now when the browser captures each of the events, it will inmediately fire them. 
That means that the handler for the event is not going to get run on the buble up but rather on the capture down:

// The browser fires the events in this order
// Event attached to <div class="one">
// Event attached to <div class="two">
// Event attached to <div class="three">

Propagation can also be stopped in the event handler, it will stop a buble up process, firing only the deepest event, or viceversa:

function logText(e) {
	console.log(this.classList.value);
	e.stopPropagation();
}
// now the the browser only fires the one event because capture=true

// Event attached to <div class="one">
`Once`: new browser feature in the browser, that allows to listen for an event only once, then eventListener is removed.
Use case: shopping carts checkout, etc.

```
 	divs.forEach(div => div.addEventListener('click', logText, {
 		capture: false,
 		once: true
 	}));
```
It is equivalent to:
 	`
     divs.forEach(div => div.removeEventListener('click', logText));
    `