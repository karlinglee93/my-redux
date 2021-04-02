import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => {
  
  return (
    todos.map(todo => (
      <Todo id={todo.id} text={todo.text} completed={todo.completed} onClick={toggleTodo} />
    ))
  )
}

export default TodoList