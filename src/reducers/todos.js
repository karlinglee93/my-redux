// todos is one of states
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
//      return state.map(todo => {
//        if (todo.id === action.id) {
//          return Object.assign({}, todo, {completed: !todo.completed})
//        }
//      })
    default:
      return state
  }
}

export default todos