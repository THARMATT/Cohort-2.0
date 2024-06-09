
const { Router } = require('express');
const { createTodo } = require('../types');
const { Todo } = require('../db');
const router=Router();

router.post('/todo',async(req,res)=>{
    const todopayload=req.body;
const parsepayload=createTodo.safeParse(todopayload);
if(!parsepayload){
    res.status(402).json({
        msg:'you sended the wrong inputs '
    })
}
const{title,description,completed}=todopayload;
const newTodo=await Todo.create({
    title,description,completed
});
res.status(200).json({
    msg:"Todo created Successfully",newTodo
})

});
router.get('/todo',async(req,res)=>{
const todos=await Todo.find({});
res.status(200).json({
    msg:'Todos fetched successfully',todos
})
})

router.put('/todo/:todoId',async(req,res)=>{
    const{todoId}=req.params;
    const{title,description}=req.body;
  const updatedTodo=  await Todo.findByIdAndUpdate(todoId,{
    title,description
  }, { new: true, runValidators: true });
  res.status(200).json({
    msg:'Todo updated successfully',updatedTodo
  })
})
router.delete('/todo/:id',async(req,res)=>{

const{id}=req.params;
    const deletedtodo=await Todo.findByIdAndDelete(id);
    res.status(200).json({
        msg:"tODO deleted successfully",deletedtodo
    })
})
module.exports=router