let todoList=[];  //just take an empty array

function displayTododList(){   //display the todo list
console.log("Your todo list will be here :");
if(todoList===0 )
{
    console.log("Your todo list is empty");
}
else{
    todoList.forEach((item,index)=>{
        console.log(index+1 + " : " + item);
    });
}
}


/// add an element to the todo list
todoList.push("finish the assigment");
todoList.push(" Complete the task within the deadline ");
todoList.push ("Attend the meeting on time");

displayTododList();
// remove the last element from the todo list
todoList.pop();

console.log("After the removing the some task from the todo list, Remaining tasks are: ");
displayTododList();