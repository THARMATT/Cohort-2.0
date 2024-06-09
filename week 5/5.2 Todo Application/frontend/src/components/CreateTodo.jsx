import React, { useEffect, useState } from 'react'
import Todo from './Todo';

const CreateTodo = () => {


   const[title,setTitle]= useState('')
   const[description,setdescription]= useState('');
  //  const[completed,setCompleted]= useState(false);
   const[todos,setTodos]=useState([]);
    
   function handleSubmit(){
    const newTodo={
        title,description
    }

  fetch('http://localhost:3000/todo',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(newTodo)
  }).then((response)=>{
return response.json()
  }).then((data)=>{
    const createdTodo = data.newTodo; // Adjust this based on the actual response structure
    setTodos((prevTodos) => ([createdTodo,...prevTodos ]
      
    ));
setTitle('')
setdescription('')
  }).catch((err)=>{
console.log(err);
  })

   }
 
useEffect(() => {
  fetch('http://localhost:3000/todo').then(async(res)=>{
    const ans= await res.json();
    setTodos(ans.todos);
    
     })
}, [])

  
   
  return (
    <div>
      <input type="text" placeholder='Enter you title' value={title} onChange={(e)=>setTitle(e.target.value)} className='p-2 outline-none border font-bold w-full rounded m-2 bg-slate-300 text-slate-700 ' />
      <input type="text" placeholder='Enter your description' value={description} onChange={(e)=>setdescription(e.target.value)} className='p-2 outline-none border font-bold w-full rounded m-2 bg-slate-300 text-black' />
      <button onClick={handleSubmit} className='bg-slate-700 font-bold text-white rounded p-2 m-2'>Add todo</button>
<Todo todos={todos}/>




    </div>
  )
}

export default CreateTodo
