import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  async function fetchTodos(){
    const res=await fetch('https://sum-server.100xdevs.com/todos');
    const ans=await res.json();
    console.log(ans.todos)
    setTodos(ans.todos)
  }
useEffect(()=>{
setInterval(()=>{
  fetchTodos()
},3000)
},[])
  return (
    <>
<div>
  {todos.map((todo)=>(
  <div key={todo.id}>
  <h1>{todo.title}</h1>
  <p>{todo.description}</p></div>
  ))}
</div>
    </>
  )
}

export default App
