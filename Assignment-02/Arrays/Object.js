//Objects 
//Objects are a collection of key-value pairs
//Objects are mutable
//Keys (properties) are usually strings (or Symbols), and values can be any data type.


//Creating an object with literal notation
let employee={
    name:"Prasanna",
    age:23
};
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation

person.name = "Bob";           // Modify property
person.city = "London";        // Add new property
delete person.age;             // Remove property


console.log(employee.name); //Accessing object properties using dot notation

let person={};  //empty object object

//using new     keyword
let person1=new Object(); //creating an object using new keyword
person1.name="Prasanna";
person1.age=23;

//using a constructor function
function person(name,ae){
    this.name=name;
    this.age=age;
} 
let p1= new  person("alice",23);
console.log(p1.name); //Alice 

//Adding and Upadting  and deletin the properties
let book = {
  title: "JavaScript Guide"
};

// Add a new property
book.author = "MDN";

// Update a property
book.title = "Advanced JavaScript";

// Delete a property
delete book.author;

//Nested objects
let student = {
  name: "Ravi",
  address: {
    city: "Bangalore",
    zip: 560001
  }
};

console.log(student.address.city); // Output: Bangalore


//Object with  methods
let person2 = {
  name: "Prasanna",
  age: 24,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};


//Looping through objects
 let person = {
  name: "Prasanna",
  age: 24,
  city: "Indiranagar"
};


for(let key in person2) {
  console.log(key + ": " + person2[key]);
}
//Output:
// name: Prasanna
// age: 24
// city: Indiranagar


