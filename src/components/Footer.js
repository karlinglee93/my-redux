import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/index'


const Footer = () => {
  
  return (
    <div>
      Show
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        ALL
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETE}>
        Complete
      </FilterLink>
    </div>
  )
}

export default Footer