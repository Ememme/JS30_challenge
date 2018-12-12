# What I've learned
##Konami Code
The Konami Code( コナミコマンド) is a 'cheat' code that appears in many Konami video games, and is often used as Easter-egg.
It is the following sequence of buttons: ↑↑↓↓←→←→ba

## JS

Trimming and array to contain the last x number of elements, useful for user input:

```let keys = [];
   const code = "abcd";
keys.splice(-keys.length - 1, code.length - keys.length)```;