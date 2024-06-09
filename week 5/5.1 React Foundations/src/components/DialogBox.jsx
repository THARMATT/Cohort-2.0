import React, { useState } from 'react'

const DialogBox = ({onClose,onSubmit,show}) => {
  const[name,setName]=useState('')
  const[description,setDescription]=useState('')
  const[Interest,setInterest]=useState('');

  if(!show){
    return null
  }
  function handleSubmit(){
    onSubmit({name,description,Interest});
    onClose()
    setName('')
    setDescription('')
    setInterest('')
  }
  return (
   
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">

        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}  className='border p-2 rounded outline-none w-full mt-2' placeholder='Enter Your name'/>
        <input type="text" name="" id="" value={description} onChange={(e)=>setDescription(e.target.value)} className='border p-2 rounded outline-none w-full mt-2' placeholder='About You'/>
        <input type="text" name="" id="" value={Interest} onChange={(e)=>setInterest(e.target.value)} className='border p-2 rounded outline-none w-full mt-2' placeholder='Your Interests'/>
        <button onClick={handleSubmit} className='bg-slate-900 text-white p-2 rounded m-2'>ADD</button>
        <button onClick={onClose} className='bg-slate-600 text-white p-2 rounded m-2'>Close</button>
      </div>
    </div>
  )
}

export default DialogBox
