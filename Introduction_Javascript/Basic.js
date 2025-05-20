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

