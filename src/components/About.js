import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import dp from '../images/dp.jpeg';

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
        
        <BottomContainer>
          <Instagram onClick={()=>{window.open('https://www.instagram.com/mayur_madhwani03/')}} className="fa-brands fa-instagram"><span>Instagram</span></Instagram>
          <Linkedin onClick={()=>{window.open('https://www.linkedin.com/in/mayur-madhwani/')}} className="fa-brands fa-linkedin-in"><span>Linkedin</span></Linkedin>
          <Twitter onClick={()=>{window.open('https://twitter.com/mayur_madhwani_')}} className="fa-brands fa-twitter"><span>Twitter</span></Twitter>
          <Facebook onClick={()=>{window.open('https://www.facebook.com/mayurmadhwani03/')}} className="fa-brands fa-facebook-f"><span>Facebook</span></Facebook>
          <Youtube onClick={()=>{window.open('https://www.youtube.com/channel/UCv6MKB7nN43ILzWxuDn8RRA')}} className="fa-brands fa-youtube"><span>YouTube</span></Youtube>
        </BottomContainer>
      
      </Bottom> 

    </Main>
  )
}

const Main = styled.div`

  background-color: white;
  width: 500px;
  height: 90%;
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
  animation-duration: 1s;
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
  height: 100vh;
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

const BottomContainer = styled.div`
  width: 100%;
  max-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i{
    border-radius: 50px;
    background-color: #C68B59;
    text-align: center;
    width: 50px;
    padding: 1%;
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
      margin: auto;
    }

    &:hover{
      transition-duration: 0.4s;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      span{
        font-family: 'Open Sans', sans-serif;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 80px;
        border-radius: 5px;
        margin-bottom:80px;
        font-size: 12px;
      }
    }
    
    span{
      position: absolute;
      opacity: 0;
      font-size: 0px;
      color: black;
      transition-duration: 0.4s;
    }

  }

  

`

const Instagram = styled.i`

  &:hover{
    color: white;
    background: #f09433; 
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    span{
      color: white;
      background: #f09433; 
      background: #d6249f;
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
  }

`

const Linkedin = styled.i`

  &:hover{
    color: white;
    background-color: #0A66C2;
    span{
      color: white;
      background-color: #0A66C2;
    }
  }

`

const Facebook = styled.i`

  &:hover{
    color: white;
    background-color: #4267B2;
    span{
      color: white;
      background-color: #4267B2;
    }
  }

`

const Twitter = styled.i`

  &:hover{
    color: white;
    background-color: #1CA1F1;
    span{
      color: white;
      background-color: #1CA1F1;
    }
  }

`
const Youtube = styled.i`

  &:hover{
    color: white;
    background-color: #FF0000;
    span{
      color: white;
      background-color: #FF0000;
    }
  }

`



export default About  