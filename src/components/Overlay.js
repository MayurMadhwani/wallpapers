import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Overlay = () => {

  const [display, setDisplay] = useState('block');

  const handleClick = ()=>{
    setDisplay('none');
  }

  return (
    <Main style={{display:display}}>    
        <Backdrop onClick={handleClick}/>
        <Container>
        <i onClick={handleClick} className="fa-solid fa-xmark"/>
            <Content>
                Welcome to Mayur's Gallery.
                <br/>
                Make your phone beautiful with these wallpapers
                <br/>
                <Span>What's New</Span>
                <br/>
                <Changes>
                    <li>Website itself</li>
                    <li>Loader alignment corrected</li>
                    <li>About section added</li>
                </Changes>
                <br/>
                <Span>Upcoming Changes</Span>
                <br/>
                Categories will be added soon stay tuned
            </Content>
            <Bottom>
                <span style={{fontWeight:'bold'}}>Note: </span>
                This website is still in production. So you may find some bugs.
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
    max-height: 700px;
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
    justify-content: flex-start;
    align-items: center;
    grid-template-rows: auto auto auto;
    text-align: center;
    
    /* animation */
    animation-name: container;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease;

    @keyframes container {
        from{opacity:0; top:-800px; height:0px}
        to{opacity:1}
    }

    @media (max-width: 730px) {
        width:90%;
        height: 90%;
    }

    //child
    i{
        font-size: 30px;
        margin: 30px;
        color: gray;
        cursor: pointer;
        
        &:hover{
            color: darkgray;
        }
    }

`

const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Changes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const Bottom = styled.div`
    margin-top: auto;
    margin-bottom: 20px;
`

const Span = styled.span`
    font-weight: bold;
    margin-top: 20px;
    display: inline-block;
`

export default Overlay