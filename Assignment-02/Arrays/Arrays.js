//Arrays & Objects
//Define Arrays
//there are different ways to represent arrays in JavaScript
//Using Array literals
let fruits=["apple","banana","Orange"];

//Using Array Construtor
let number= new Array(1,2,3,4,5);  /// whrer new keyword is invoked at the run time mnemory allocated for the array

//Array with different data types
let mixed=[1,"hello",true];

//Creating Array of fixed length
let arrr1 = new Array(5); // this will create an array of length 5 with all elements undefined

//How to Access An array elements in JS
let arr = ["a", "b", "c"];
console.log(arr[0]); // "a"
console.log(arr[2]); // "c"

//Accesing the Last element in Arrays 
let last = arr[arr.length-1]; // "c"


//Destructing assignments




///Loops in array
//for loop
let fruits1 = ["apple", "banana", "orange"];
for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}

//for of loop
let fruits2 = ["apple", "banana", "orange"];
for (let fruit of fruits2) {
    console.log(fruit);
}       

//foreach loop
let fruits3 = ["apple", "banana", "orange"];
fruits3.forEach(function(fruit) {
    console.log(fruit);
});

//map  method 
let numbers=[1,2,3,4,5];
let square=numbers.map(function(num){
    return num*num;
})
console.log(square); 


//while loop
let i = 0;
let fruits4 = ["apple", "banana", "orange"];
while (i < fruits4.length) {
    console.log(fruits4[i]);
    i++;
}



//Arrays Methods
//1. push() - adds one or more elements to the end of an array and returns the new length of the array
let arr1=[1,2,3];
arrr1.push(4);
console.log(arrr1); // [1, 2, 3, 4]

//2. pop() - removes the last element from an array and returns that element
let arr2=[1, 2, 3, 4];
arr2.pop();
console.log(arr2); // [1, 2, 3]

//3. shift() - removes the first element from an array and returns that element
let arr3=[1, 2, 3, 4];
arr3.shift();
console.log(arr3); // [2, 3, 4]

//4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
let arr4=[1, 2, 3];
arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3]

//5. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let arr5=[1, 2, 3, 4, 5];
arr5.splice(2, 2, 6, 7);
console.log(arr5); // [1, 2, 6, 7, 5]

//6. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
let arr6=[1, 2, 3, 4, 5];
arr6.slice(1, 3);
console.log(arr6); // [2, 3]

//7. concat() - used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
let arr7=[1, 2, 3];
let arr8=[4, 5, 6];
let arr9=arr7.concat(arr8);
console.log(arr9); // [1, 2, 3, 4, 5, 6]

//8. join() - joins all elements of an array into a string
let arr10=[1, 2, 3];
let str=arr10.join("-");
console.log(str); // "1-2-3"

//9. Map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let arr11=[1, 2, 3];
let arr12=arr11.map(function(x) {
    return x * 2;
});
console.log(arr12); // [2, 4, 6]

//10. Filter() - creates a new array with all elements that pass the test implemented by the provided function
let arr13=[1, 2, 3, 4, 5];
let arr14=arr13.filter(function(x) {
    return x > 2;
});
console.log(arr14); // [3, 4, 5]

//11. Reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
let arr15=[1, 2, 3, 4, 5];
let sum=arr15.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15



