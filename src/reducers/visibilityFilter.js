import {VisibilityFilters} from '../actions/index'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log('visibilityFilter reducers called')
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter