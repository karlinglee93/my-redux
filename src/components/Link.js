import React from 'react'

//const handleClick = () => {
//  
//}

const Link = ({ filter, setVisibilityFilter, children }) => {
  
  return (
    <button onClick={() => setVisibilityFilter(filter)}>
      {children}
    </button>
  )
}

export default Link