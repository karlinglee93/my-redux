import React from 'react'

const Link = ({ active, onClick, children }) => {
  
  return (
    <button 
      disabled={active}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Link