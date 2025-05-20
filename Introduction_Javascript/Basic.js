///variables
var name ="prasanna shetty";
let ages=23;
const city="bangalore";

//console -  is a built-in object that provides access to the browser’s debugging console.
console.log(ages);
console.log(name);
console.log(city);

//Data types
let name1 = "prasanna"; //string
let age1 = 23; //number
let isStudent = true; //boolean
let score= null; //null
let student; //undefined


//Non - primitive data types
let person = { 
    name: "prasanna",
    age: 23,
    city: "bangalore"
}; //object

let fruits = ["apple", "banana", "orange"]; //array
let welcome= function() { 
    console.log("Hello, World!");
} //function



//Operators
//arithmetic operators
let a = 10;
let b = 3;
console.log("Addition:", a + b);           // 13
console.log("Subtraction:", a - b);        // 7
console.log("Multiplication:", a * b);     // 30
console.log("Division:", a / b);           // 3.333...
console.log("Modulus:", a % b);            // 1
console.log("Exponentiation:", a ** b);    // 1000


//Assignment operators
let x = 5;
x += 2;  // x = x + 2
console.log("After += :", x); // 7

// 3. Comparison Operators
let age = 18;
console.log("Is age equal to '18'?", age == '18');     // true
console.log("Is age strictly equal to '18'?", age === '18'); // false 
console.log("Is age not equal to 20?", age != 20);     // true

// 4. Logical Operators
let isStuent =false;
let isEmployee=true;

console.log("Is student and employee?", isStuent && isEmployee); // false
console.log("Is student or employee?", isStuent || isEmployee); // true
console.log("Not a student?", !isStuent); // true

// 5.String operators
let firstName = "navadhiti";
let lastName = "solutions";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // "navadhiti solutions"

// 6. Ternary operator
let scored = 85;
let result = (score >= 50) ? "Pass" : "Fail";
console.log("Result:", result); // "Pass"



/// Control Flow in JavaScript
///Types of Control Flow
///1.Conditional Statements  --  if, else if, else
let myAge = 18;

if (myAge < 18) {
  console.log("Minor");
} else if (myAge === 18) {
  console.log("Just turned adult");
} else {
  console.log("Adult");
}

//switch statement
let color = "green";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown signal");
}

///Looping Statements
//for loop
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}

//while loop
let i = 0;
while (i < 3) {
  console.log("While loop:", i);
  i++;
}

//do while loop
let j = 0;
do {
  console.log("Do-while loop:", i);
  i++;
} while (j < 2);


///3.Jump Statements
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;   // Skip when i is 3
  if (i === 5) break;      // Exit when i is 5
  console.log(i);
}
//Output: 1, 2, 4




///Functions
//1.Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Prasanna")); // "Hello, Prasanna!"

//2.Function Expression
const add = function(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7

//3.Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

//4.Default Parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet()); // "Hello, Guest!"

//5.Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

//6.Function Scope
function testScope() {
  let localVar = "I'm inside!";
  console.log(localVar);  // Works
}

testScope();
// console.log(localVar);  //  Error: not defined
