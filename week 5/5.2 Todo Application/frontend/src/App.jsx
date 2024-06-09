import React from 'react'
import CreateTodo from './components/CreateTodo'

const App = () => {
  return (
    <div className='bg-slate-400'>
      <h1 className="text-3xl font-bold text-slate-800 text-center bg-slate-400 p-2">Todos</h1>
     <div className="m-2 p-2">
     <CreateTodo/>
     </div>
    </div>
  )
}

export default App
