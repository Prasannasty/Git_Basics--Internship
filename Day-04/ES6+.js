///ES6+ features
////ECMAScript (ES) is the blue print or standardized specification that defines how a scripting language like JavaScript should work.

///1.Template Literals
///Template literals are a feature introduced in ES6 that allow you to create strings using backticks (`) instead of single or double quotes. They support
///String interpolation: Embed variables and expressions using ${...}.

///Before ES6, Traditional string concatenation was done using the + operator
const name = "Prasanna ";
const msg = "Hello, " + name + "! Welcome to ES6.";
console.log(msg); // Output: Hello, Prasanna! Welcome to ES6.

///With ES6, you can use template literals for cleaner and more readable code.
const name1 = "Prasanna";
const msg1 = `Hello, ${name1}! Welcome to ES6.`;
console.log(msg1); // Output: Hello, Prasanna! Welcome to ES6.

///Multiline strings:  using String interpolation   
const msg2= "Line 1\n" +
            "Line 2\n" +
            "Line 3";
console.log(msg2); // Output: Line 1\nLine 2\nLine 3


///With ES6, you can create multiline strings using template literals without the need for concatenation.
const msg3= `Line 1
Line 2
Line 3`;
console.log(msg3); // Output: Line 1\nLine 2\nLine 3


////2. Array and Object Destructuring
///Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables. It makes code cleaner and more readable.
const person=[1,2,3,4,5];   //Array Destructuring
const[a,b,c]=person;
console.log(a,b,c); // Output: 1 2 3

//Object Destructuring
const person1={
    naam:"Prasanna",
    age:24
}
const{naam,age}=person1;
console.log(naam,age); // Output: Prasanna 24

//modify the value of destructured variable
person1.naam="Shetty";
console.log(person1.naam); // Output: Shetty


////3.Let and   Const
///Before ES6, JavaScript had only function scope and global scope for variables declared with var. This could lead to issues with variable hoisting and scoping.
///With ES6, let and const were introduced to provide block scope for variables. This helps prevent accidental variable reassignments and improves code clarity.
///let: mutable  and Block-scoped variable declaration
///const: immutable and Constant variable declaration
///const variables cannot be reassigned, but their properties can be modified if they are objects or arrays.
//The variable binding (reference) cannot be changed, but the contents of the object it points to can be mutated.
//In Let 
let myName = "Prasanna ";
myName = "Shetty"; // You can reassign the variable
console.log(myName); // Output: Shetty

//In Const
const country = "India";    
country = "USA"; // Error: Assignment to constant variable
console.log(country); // Output: India



////4. Arrow Functions
///Arrow functions provide a more concise syntax for writing function expressions. They also lexically bind the this value, which means they inherit the this value from the surrounding context.

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;


//Syntax variations
///1.  With Parameters and Single Expression
const greet = name => `Hello, ${name}`;
console.log(greet("navadhiti")); // Hello, navadhiti
///2.  With Multiple Parameters
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15
///3.  With No Parameters
const greeting = () => "Hello, World!";
console.log(greeting ()); // Output: Hello, World!
///4.  With Block Body
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(5, 10)); // Output: 50   ////If you use {}, you must write return explicitly.
///5.  With Default Parameters
const greets = (name = "Guest") => `Hello, ${name}`;
console.log(greets()); // Output: Hello, Guest



////5. Spread and Rest Operators
///The spread operator is used to expand an array or object into a function call or array/object literal
///The rest operator is used to collect multiple elements into an array or object
///Spread operator : To expand elements of an array or object.
//In arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

///In objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }


///Rest operator: To collect multiple elements into an array or object.
///In functions:
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

///In arrays:
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [...arr3];
console.log(arr4); // [1, 2, 3, 4, 5]

///In objects destructuring:
const deatils = { name3: "Prasanna", age: 23, country: "India" };
const { name3, ...rest } = person;

console.log(name3); // Prasanna
console.log(rest); // { age: 25, country: "India" }


////6. Default Parameters
// Default parameters allow function parameters to have default values if no value or undefined is passed.
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet(); // Output: Hello, Guest
greet("Prasanna"); // Output: Hello, Prasanna


////7. Classes
///// ES6 introduces a class syntax for creating objects and handling inheritance.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}
const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.



///8. Modules
///Modules allow you to break your code into separate files, making it easier to manage and maintain. You can export functions, objects, or variables from one module and import them into another.
// Exporting a module
export function add(a, b) {
    return a + b;
}
// Importing a module
import { add } from './module.js';

////9. Promises
///A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
///Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.
///A promise can be in one of three states: pending, fulfilled, or rejected.
///You can use promises to handle asynchronous operations, such as fetching data from a server, or waiting for a user to respond to a prompt.
///Promises provide a way to handle asynchronous operations in a more readable and maintainable way.

///Example of a Promise
///1. Creating a Promise
///A promise is created using the Promise constructor, which takes a function (executor) as an argument. The executor function takes two arguments: resolve and reject.
const promise = new Promise((resolve, reject) => {
  // async operation
  if (true) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});
//2. Consuming a Promise
///You can consume a promise using the then() and catch() methods. The then() method is called when the promise is resolved, and the catch() method is called when the promise is rejected.
promise
  .then(result => console.log(result)) // Runs if resolved
  .catch(error => console.log(error)); // Runs if rejected


  const greet=()=>console.log("Hello world");