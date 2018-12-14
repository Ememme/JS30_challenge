# What I've learned:
 
 ## primitive types: manipulated by value 
 ## object type: manipulated by reference. 

### Manipulating by Value
There are 6 primitive types in JavaScript and these are manipulated by value:

- String
- Number
- Boolean
- Null
- Undefined
- symbol (new in ECMAScript 2015)

If we define a primitive type variable, and then define second variable as the previously defined variable, the second variable will **copy the current value** of the first variable. No changes to the first variable will affect the second, and vice versa.

Example:

```let cat = "Całka"
let cat2 = cat
console.log(cat === cat2) // true

cat2 = "Boruc"
console.log(cat === cat2, cat, cat2) // false "Całka" "Boruc"

cat = "Nie-Całka"
console.log(me === me2, me, me2) // false "Nie-całka" "Boruc"
```

### Manipulating by Reference
Object types are manipulated by reference. 
(Everything that is not classified as a primitive type is an object).
In computer science, an object is a **value in memory which is possibly referenced by an identifier**.

In JavaScript, objects can be seen as a **collection of properties**. With the object literal syntax (a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).), a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.

Example:

```
const cat = { name: "Całka", age: 10 };
const cat2 = cat;
console.log(cat === cat2, cat, cat2); // true {name: "Całka", age: 10} {name: "Całka", age: 10}
```
If we update the property of the object by calling on either variable, both variables will reflect that change.
```
cat.name = "Nie-Całka"
console.log(cat === cat2, cat, cat2); // true {name: "Nie-Całka", age: 10} {name: "Nie-Całka", age: 10}
```

Cat2 does not copy cat - it contains a *reference to the object defined in ``const cat``*.
Any changes applied directly to the object will have an effect on all variables referencing that particular object.

## Creating a copy of an object 


```
const cat3 = Object.assign({}, cat) // creating a copy of cat object;
console.log(cat3); // {name: "Nie-Całka", age: 10}
cat.name = "Calka"; // reassign property on original object;
console.log(cat, cat2, cat3); // {name: "Calka", age: 10} {name: "Calka", age: 10} {name: "Nie-Całka", age: 10}
```

The first cat object has been copied and copy can be changed without manipulating the original.

**NOTE**: If copied object contains nested objects only the first level is being copied!!!
 Anything deeper than that will still be a reference.