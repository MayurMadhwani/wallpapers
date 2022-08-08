import React from 'react'
import styled from 'styled-components'
import { Link, to } from 'react-router-dom'

const Navbar = () => {
  return (
    <Main>
      <Nav className="navbar navbar-expand-lg bg-light">
        <Container className="container-fluid">
          <Link to="/home" style={{color:'#FCF8E8', }} className="navbar-brand" >Mayur's Gallery</Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/home' style={{color:'#FCF8E8', }} className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              
            </ul>
            
          </div>
        </Container>
      </Nav>
    </Main>
  )
}

const Main = styled.div`
  width: 98%;
  transition-duration: 0.4s;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left:10px;
  margin-right: 10px;
  color: red;
  
  /* padding: 10px; */
`

const Nav = styled.nav`
  border-radius: 25px;
  padding: 0px;
  color: white;
`

const Container = styled.div`
  background-color: #C68B59;
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
`

export default Navbar