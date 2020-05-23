# Truth table formula solver
✍️📚 This program was made for studying purposes

## Context
* I was having the "Logic" subject in college, where i've learned about the "truth table" to determinate the possible values for a propositional formula.

* I was thinking about out how to implement an algorithm that solves any formula (just for curiosity) and there it is!

## What i've learned

* Node.Js Runtime
* Deal with JavaScript **arrow function** notation
* **Regular Expressions** to manipulate strings
* The diference and utility between **Infix/ Prefix/ Postfix** notations

## How to use
Just type any formula inside this function, at the end of index.js file:
```javascript
// input any logic formula here
console.log( formulaSolutions( "(p->(~p^r)) ^ (qv(p<->~r))" ) );
```
It returns an array with the formula solutions 🙂