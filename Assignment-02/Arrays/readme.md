
Topics to learn 
1.Quick recap of yesterday's learnings 
2.Arrays & Objects
Define arrays, access elements, loop through arrays. Objects and key-value pairs
3.Array Methods
push, pop, shift, unshift, map, filter, forEach
4.Object Methods
Creating objects, accessing/modifying properties, nested objects
5.Arrays & Objects deep dive, Basic DOM manipulation



### What is Arrays in JS ###
Array is an ordered collection of elements (values), where each element has a numeric index starting from 0.

In JavaScript arrays, you can store negative numbers as values, but not as indexes.



Array is a non-primitive data type - it is an object. It can be created using the array literal syntax.

### Characterstics of Arrays in JS ###
1.JavaScript arrays are resizable and can contain a mix of different data types.
2.JavaScript arrays are not associative arrays.
3.JavaScript arrays are zero-indexed

### Accessing Elements in Arrays ###

You can access elements in a JavaScript array using their index. Array indexes start from 0.

**Syntax:**
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "cherry"

- To access the last element:
  let lastFruit = fruits[fruits.length - 1];
  console.log(lastFruit); // Output: "cherry"

- If you try to access an index that does not exist, you get `undefined`:
  console.log(fruits[5]); // Output: undefined
 



### Looping through the arrays ###
You can loop through arrays in JavaScript using several methods to access each element:

1.for loop
2.for ...of looop
3. forEach Loop : returns a undefined value
4.while Loop
5.Map method  ( new Array , it does not the change the original Array)


### Difference Between for...of and for...in Loops ###

*for...of loop:*  
- Used to iterate over the values of an iterable object (like arrays, strings, etc.).
- Returns each element in the array.

*for...in loop:*  
- Used to iterate over the enumerable property keys of an object (including arrays, but not recommended for arrays).
- Returns the index (as a string) when used with arrays.

### Arrays Methods ###
1.push() - adds one or more elements to the end of an array and returns the new length  
2.pop() - removes the last element from an array and returns it 
3.shift() - removes the first element from an array and returns it
4.unshift() - adds one or more elements to the beginning of an array and returns the new length
5.splice() - adds or removes elements from an array and returns the removed elements
6.slice() - returns a shallow copy of a portion of an array
7.concat() - returns a new array that contains the elements of the original array and the elements of the array(s) passed as arguments
8.filter()- The filter method creates a new array with all elements that pass the condition implemented by the provided function. It does not change the original array.
9.map()- The map method creates a new array with the results of applying the provided function on every
element in this array. It does not change the original array.
10.reduce()- The reduce method applies a function against an accumulator and each element in the array


### Obejcts ###
. An object is a collection of key-value pairs.
. Keys (properties) are usually strings (or Symbols), and values can be any data type
. Objects are mutable, meaning they can be changed after creation.



