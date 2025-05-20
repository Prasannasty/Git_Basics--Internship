let nums1=parseFloat(prompt("Enter a first Number"));
let operator=prompt("Enter an operator (+, -, *, /)");
let nums2=parseFloat(prompt("Enter a second Number"));

var result;

// if(operator=== "+"){
//     result=nums1 + nums2; // adding purpose i used
// }
// else if(operator=== "-"){
//     result=nums1-nums2; // subtracting purpose i used
// }
// else if(operator=== "*"){
//     result=nums1*nums2; // multiplying purpose i used
// }
// else if(operator=== "/"){
//    if(nums2!==0){         // checking if the second number is not zero
//     // if it is not zero then i will divide
//     result=nums1/nums2;
//    }
//    else{
//     console.log("Cannot divide by zero");
//    }
// }
// else{
//     console.log("Invalid operator"); 
// }

switch(operator){
case "+":{
    result=nums1 + nums2; // adding purpose i used
    break;
}
case "-":{
    result=nums1-nums2; // subtracting purpose i used
    break;
}
case "*":{
    result=nums1*nums2; // multiplying purpose i used
    break;
}
case "/":{
   if(nums2!==0){         // checking if the second number is not zero
     // if it is not zero then i will divide
     result=nums1/nums2;
    }
    else{
     console.log("Cannot divide by zero");
    }
    break;
}
default:{
    console.log("Invalid operator"); 
    break;
}
}


//final output in the variable of result
alert("The result is: " + result);