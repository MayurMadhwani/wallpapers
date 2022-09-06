import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = ({path,category}) => {

  return (
    <NavLink 

        style={({ isActive }) => ({ 
            backgroundColor: isActive ? '#C68B59' : '#FCF8E8',
            color: isActive ? '#FCF8E8' : '#C68B59',
            ...buttonStyle
        })}   

        to={path} className="nav-link active" aria-current="page"
    >
        {category}
    </NavLink>
  )
}

const buttonStyle = {
  padding: '2px 32px',
  textAlign: 'center',
  fontSize: '18px',
  marginTop: '10px',
  transitionDuration: '0.4s',
  border: 'none',
  width: '100%',
  letterSpacing: '2px',
  cursor: 'pointer',
  borderRadius: '5px',
}

export default Navlink