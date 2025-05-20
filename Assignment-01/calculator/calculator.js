let nums1=parseFloat(prompt("Enter a first Number"));
let operator=prompt("Enter an operator (+, -, *, /)");
let nums2=parseFloat(prompt("Enter a second Number"));

var result;

if(operator=== "+"){
    result=nums1 + nums2;
}
else if(operator=== "-"){
    result=nums1-nums2;
}
else if(operator=== "*"){
    result=nums1*nums2;
}
else if(operator=== "/"){
   if(nums2!==0){
    result=nums1/nums2;
   }
   else{
    console.log("Cannot divide by zero");
   }
}
else{
    console.log("Invalid operator");
}

alert("The result is: " + result);