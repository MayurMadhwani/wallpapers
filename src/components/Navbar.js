import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Drawer from './Content/Drawer'

const Navbar = () => {
  return (
    <Main>
      <Drawer/>
      <Nav className="navbar navbar-expand-lg bg-light">
        <Container className=''>
        
          <Button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="fa-solid fa-bars"></i>
          </Button>
        
          <Link to="/home" style={{color:'#FCF8E8'}} className="navbar-brand" >Mayur's Gallery</Link>
          <Link to="/about" style={{color:'#FCF8E8'}} className="navbar-brand" >About</Link>
          
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

  animation-name: nav;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;

  @keyframes nav {
      from{opacity:0; height:0px; top:-200px}
      to{opacity:1}
  }

`

const Nav = styled.nav`
  border-radius: 25px;
  padding: 0px;
  color: white;
  width: 100%;
`

const Button = styled.button`
  color: white;
  margin-right: 10px;
  border: none;
  border-radius: 25px;
  transition-duration: 0.4s;
`

const Container = styled.div`
  background-color: #C68B59;//main color
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export default Navbar