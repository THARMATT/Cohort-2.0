import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const[todo,setTodo]=useState([])
  function AddTodo() {
    const newtodo={title,description};
    setTodo([...todo,newtodo])
    setdescription("");
    settitle("");
    console.log(title, description);
  }
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button onClick={AddTodo}>Add todo</button>
      <div className="todos">
        {
          todo.map((todo,index)=>(
<div key={index}>
<div  className="title">{todo.title}</div>
      <div className="description">{todo.description}</div></div>
          ))
        }
      </div>
    </>
  );
};
export default App;
