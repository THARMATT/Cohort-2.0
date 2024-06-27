
const App = () => {

  return (
    <div>
      <Todo title='go to gym' description='rm wor'/>
    </div>
  )
}

interface Todos{
  title:string,
  description:string
}

function Todo(todos:Todos){
  return(
    <>
   <div>
    {todos.title}
   </div>
   <div>
    {todos.description }
   </div>
    </>
  )
}
export default App
