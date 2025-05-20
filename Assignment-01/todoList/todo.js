let todoList=[];

function displayTododList(){
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

todoList.push("finish the assigment");
todoList.push(" Complete the task within the deadline ");
todoList.push ("Attend the meeting on time");

displayTododList();
todoList.pop();

console.log("After the removing the some task from the todo list, Remaining tasks are: ");
displayTododList();