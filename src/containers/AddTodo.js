import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

// This is a container component
// connect() equals to store.dispatch()
// There is a dispatch prop for a container component
// container component has dispatch, has no state
const AddTodo = ({ dispatch }) => {
  let input
  
  // This is a good example for learning form
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) return
      dispatch(addTodo(input.value))
      input.value = null
    }}>
      <input ref={node => input = node}/>
      <button type='submit'>
        Add Todo
      </button>
    </form>  
  )
}

export default connect()(AddTodo)