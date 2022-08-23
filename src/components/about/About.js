import React from 'react'
import styled from 'styled-components'
import dp from '../../images/dp.jpeg'
import BottomContainer from './BottomContainer'

const About = () => {

  return (
    <Main>
      <Top>
        <img src={dp} alt='loading'></img>
        <Intro>
          <Span>Hi there,</Span>
          I'm Mayur Madhwani
        </Intro>
      </Top>
      I'm a React Developer and a Photographer
      <br/>
      I hope you like my work
      <br/>
      <br/>
      Feel free to connect

      <Bottom>
        <BottomContainer/>
      </Bottom> 

    </Main>
  )
}

const Main = styled.div`

  background-color: white;
  width: 500px;
  height: 90%;
  max-height: 700px;
  transition-duration: 0.4s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  letter-spacing: 1px;
  overflow-y: hidden;
  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img{
    background-color: white;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    transition-duration: 0.4s;
    @media (max-width: 500px) {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }

  //animation

  animation-name: main;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;

  @keyframes main {
    from {
      opacity:0;
      width:50%;
      height:50%;
    }
    to {opacity:1}
  }

`

const Top = styled.div`

  display: flex;
  align-items: flex-end;
  margin: 40px;
  transition-duration: 0.4s;
  padding: 10px;
  @media (max-width: 550px) {
    width: 90%;
  }
  
`

const Intro = styled.div`
  margin: 10px;
`

const Span = styled.span`
  font-size: 30px;
  display: block;
  transition-duration: 0.4s;
`

const Bottom = styled.div`

  width: 100%;
  height: 300px;
  transition-duration: 0.4s;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: row;
  border: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
  &:hover{
    margin-top: 100px;
    font-size: 40px;
  }

`

export default About  