import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Drawer = () => {
  return (
    <Main>
        
        <Bar style={{width:'300px'}} className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Categories</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>

            <div className="offcanvas-body">
                
                <hr/>
                
                
                <Categories>
                    <Link to='/home'className="nav-link active" aria-current="page" >This area is under construction</Link>
                    <NavLink 
                        style={({ isActive }) => ({ 
                            backgroundColor: isActive ? '#C68B59' : '#FCF8E8',
                            color: isActive ? '#FCF8E8' : '#C68B59',
                            ...buttonStyle
                        })}   
                        to='/home'className="nav-link active" aria-current="page"
                    >
                        Home
                    </NavLink>
                    
                    <NavLink 
                        style={({ isActive }) => ({ 
                            backgroundColor: isActive ? '#C68B59' : '#FCF8E8',
                            color: isActive ? '#FCF8E8' : '#C68B59',
                            ...buttonStyle
                        })}   

                        to='animals'className="nav-link active" aria-current="page"
                    >
                            Animals
                    </NavLink>
                    
                </Categories>
            </div>
        </Bar>
    </Main>
  )
}

const Main = styled.div`
    font-family: 'Open Sans', sans-serif;
`

const Bar = styled.div`
    background-color: #FCF8E8;
`

const buttonStyle = {
    padding: '2px 32px',
    textAlign: 'center',
    fontSize: '16px',
    marginTop: '10px',
    transitionDuration: '0.4s',
    border: 'none',
    width: '100%',
    letterSpacing: '2px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '18px',
}

const Categories = styled.div`

    display: flex;
    flex-flow: column;
    align-items: flex-start;

`

export default Drawer

