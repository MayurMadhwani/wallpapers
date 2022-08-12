import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Overlay = () => {

  const [display, setDisplay] = useState('block');

  const handleClick = ()=>{
    // setDisplay('none');
  }

  return (
    <Main style={{display:display}}>    
        <Backdrop onClick={handleClick}/>
        <Container>
            <Content>

            </Content>
            <Bottom>
                <span>Note: </span>
            </Bottom>
        </Container>
    </Main>
  )
}

const Main = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
`

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.5;
    position: absolute;
`

const Container = styled.div`
    z-index: 5;
    width: 700px;
    height: 90%;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 25px;

    display: flex;
    flex-direction: column;

    @media (max-width: 730px) {
        width:90%;
        height: 90%;
    }

`

const Content = styled.div`

`

const Bottom = styled.div`
    
`

export default Overlay