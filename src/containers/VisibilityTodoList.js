import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions/index'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case VisibilityFilters.SHOW_COMPLETE:
      return todos. filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)