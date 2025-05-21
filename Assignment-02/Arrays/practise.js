let arr = ["1", "2", "3", "4", "5", "6"];
let n = arr.length;
let k = 2;

k = k % n; 

let temp = arr.slice(n - k, n);
let temp1 = arr.slice(0, n - k); 

let result = temp.concat(temp1);
console.log(result);