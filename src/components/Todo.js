import React from 'react'

const Todo = ({id, text, completed, toggleTodo}) => {
  
  return (
    <li style={
      completed 
        ? {textDecoration: 'line-through'}  
        : null}
      onClick={id => toggleTodo(id)}
    >
      {text}
    </li>
  )
}

export default Todo