import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { darkBackground, darkText, lightBackground, lightText, solidDark, solidLight } from '../../../colors/colors';

const Navlink = ({path,category}) => {

  const darkmode = useSelector(state=>state.darkmode.value);

  return (
    <NavLink 

        style={({ isActive }) => ({ 
            backgroundColor: darkmode?
              isActive ? solidDark : darkBackground:
              isActive ? solidLight : lightBackground,
            color: darkmode?
              isActive? darkText : solidDark :
              isActive ? lightBackground : solidLight,
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
  transitionDuration: '0.2s',
  border: 'none',
  width: '100%',
  letterSpacing: '2px',
  cursor: 'pointer',
  borderRadius: '5px',
}

export default Navlink