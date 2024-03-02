"use client"
import React, { useState } from 'react'
import  {addTodos}  from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {

  const [todo, setTodo] = useState("")
  const dispatch = useDispatch();;
  const todosData = useSelector((data)=>(data.todosData.todos));
  const userDispatch = () => {
    setTodo("");
    dispatch(addTodos(todo));
  } 
  return (
    <div><h1>Add Todos</h1>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='add new task'></input>
      <button onClick={userDispatch}>Add Todo</button>
      <br></br>
      <br></br>
      <hr></hr>
      {todosData.map((item, index)=>{
        return <div>
          <p key={index}>{item.name}</p>
        </div>
      })}
    </div> 
  )
}

export default page