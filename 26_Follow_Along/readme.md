# What I've learned

## CSS:

To make an 'arrow':

1. Create div witha a span class of arrow
```<div class="dropdownBackground">
            <!-- This is the /\ element -->
        <span class="arrow"></span>
    </div>
```

2. Arrow element: 

position it absolutely, use transform rotate to make it a 'diamond' and same color background
.arrow {
    position: absolute; 
    width: 20px;
    height: 20px;
    display: block;
    background: red;
    transform: translateY(-50%) rotate(45deg);
}

## CSS > selector
Used to match direct descendent elements.

const listTriggers = document.querySelectorAll('.cool > li');
The first li tag, of elements with a class of cool will be selected.



## JS

Shortcircuiting with && and ||

 // In ES6 - arrow function this is inherited from the 'parent function';
 Instead of writing if (classList.contains('trigger-enter') use logical operators to make it faster => the second class will be added only if the first one evalutaes to true
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

### getBoundingClientRect modification
This object gives positional values based on the current viewport's top-left point (which corresponds to (0, 0)).
To target one element based on another element.

1. get that element's positional values via getBoundingClientRect()
2. subtract these from the target element's positional values.

Dropdown position based on the 'nav' element:

const navCoords = nav.getBoundingClientRect();
const dropdownCoords = dropdown.getBoundingClientRect();

const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
};