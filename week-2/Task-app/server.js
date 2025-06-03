const express= require('express');
const app=express();
const path=require('path');
const tasksRouter= require('./src/routes/tasks');
const port=3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.use('/api/tasks',tasksRouter);