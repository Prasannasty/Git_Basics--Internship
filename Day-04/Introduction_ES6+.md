Today's topic
1.Introduction to ES6+
Let/const, Arrow functions, Template literals, Destructuring
2.Array & Object Destructuring
Access values from arrays/objects using destructuring
3.Spread & Rest Operators
Usage in functions, merging arrays/objects

# Introduction to ES6+ Features in JavaScript

ECMAScript 2015 (ES6) and later versions introduced powerful features to JavaScript, making code more concise, readable, and maintainable. Here are some key ES6+ features:

   ES6 (ECMAScript 2015) and Beyond (ES6+)
  Key Features Introduced in ES6:
1. let and const – Block-scoped variables

2. Arrow Functions – Shorter syntax: (a, b) => a + b

3. Template Literals – ${variable} inside backticks

4. Destructuring – Unpack arrays or objects easily

5. Default Parameters – Set default values in functions

6. Rest and Spread Operators – ...args, ...obj

7. Enhanced Object Literals – Shorthand methods, computed keys

8. Classes – class syntax for OOP

9. Modules – import/export for modular code

10. Promises – Native way to handle async operations

11. For...of Loop – Iterates over iterable objects

12. Map and Set – New data structures

13. Symbols – Unique identifiers for object properties

14. Iterators and Generators – Custom iteration logic



## 1. Let and Const
- `let` and `const` provide block-scoped variable declarations.
- `const` is used for variables that won’t be reassigned.

```js
let count = 10;
const PI = 3.14;
```

## 2. Arrow Functions
Shorter syntax for writing functions.

```js
const add = (a, b) => a + b;
```

## 3. Template Literals
Use backticks for string interpolation and multi-line strings.

```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

## 4. Destructuring Assignment
Extract values from arrays or objects easily.

```js
const [x, y] = [1, 2];
const {title, author} = book;
```

## 5. Default Parameters
Set default values for function parameters.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

## 6. Spread and Rest Operators
- Spread (`...`) expands arrays/objects.
- Rest (`...`) collects arguments into an array.

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1,2,3,4]

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

## 7. Classes
Simplified syntax for creating objects and inheritance.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```

## 8. Promises and Async/Await
Handle asynchronous operations more easily.

```js
const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000));
};

async function getData() {
  const result = await fetchData();
  console.log(result);
}
```

## 9. Modules
Use `import` and `export` to organize code into modules.

```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
```

---

These features help write modern, efficient, and clean JavaScript code.
