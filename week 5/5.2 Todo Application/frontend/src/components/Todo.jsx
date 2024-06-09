import React, { useState } from "react";

const Todo = ({ todos }) => {
 
  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className="border shadow-md m-2 p-2 rounded bg-slate-300">
            <h2 className="font-bold text-slate-600">
              {" "}
              Title:
              {todo.title}
            </h2>
            <p className=" text-slate-900">Description:{todo.description}</p>
            <button className="border p-2 bg-slate-900 text-gray-200 font-bold rounded" >
              {todo.completed === true ? "Completed" : "Mark as Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
