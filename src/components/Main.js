import React from 'react'

import AddTodo from '../containers/AddTodo'
import VisibilityTodoList from '../containers/VisibilityTodoList'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <AddTodo />
      <VisibilityTodoList />
      <Footer />
    </>
  )
}

export default Main