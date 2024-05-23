const express=require('express');

const app=express();
const todos=[]
app.use(express.json())
app.get('/todo',(req,res)=>{
res.send(todos)
})

app.post('/todo',(req,res)=>{
    const {todo}=req.body;
    if(todo){
        todos.push(todo)
    }
    console.log(todo);
    res.status(200).json({messages:"todo added successfully:",todos})
})

app.delete('/todo',(req,res)=>{
    const {todo}=req.body;
    if(todo){
        todos.pop(todo)
    }
    res.status(200).json({
        message:'todo deleted successfully',
        todos
    })
})

app.listen(3000,()=>{
    console.log("app is listening on port 30000");
})