import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'

const getFilteredTodoList = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'ACTIVE_TODOS':
      return todos.map(todo => todo.completed === false)
    case 'COMPLETE_TODOS':
      return todos.map(todo => todo.completed === true)
    case 'ALL_TODOS':
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  todos: getFilteredTodoList(state.todos, state.visibilityFilter)
}

const mapDispatchToProps = (dispatch) => {
  toggleTodo: id => dispatch(toggleTodo)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)