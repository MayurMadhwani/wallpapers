import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const FirstPage = () => {

    const navigate = useNavigate();

    const goToHome = ()=>{
        
        navigate('/home');
        
    }

    const url = 'https://media.istockphoto.com/photos/camera-lens-with-red-and-blue-backlight-macro-photography-lenses-picture-id1187951204?k=20&m=1187951204&s=612x612&w=0&h=t1jUkNsyuU7tVnOLI_Qpch8UOMhCh8MZ3PqA216Zwts=';

  return (
    <Main>
        <Image>
            <Button onClick={goToHome}>Explore  <i class="fa-solid fa-arrow-right"/></Button> 
        </Image>
    </Main>
  )
}

const Main = styled.div`
    width: 90%;
    height: 90%;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 0;
    font-family: 'Open Sans', sans-serif;
`

const Image = styled.div`
    /* background-image: url('https://live.staticflickr.com/623/20872780508_676674b4d0_k.jpg'); */
    background-image: url('https://images4.alphacoders.com/255/255596.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    height: 90%;
    width: 90%;
    position: absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.4s;
    opacity: 0.9;
    &:hover{
        opacity: 1;
        height: 100%;
        width: 100%;
    }

`
const Button = styled.button`
    
    color: #F5C7A9;
    padding: 16px 32px;
    text-align: center;
    background-color: #FCF8E8;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.1s;
    border: 1px solid #F5C7A9;
    border-radius: 50px;
    width: 300px;
    letter-spacing: 1px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    z-index: 1;
    background-color: #FCF8E8;
    
    &:hover {
        padding: 18px 36px;
        width: 310px;
        font-size: 20px;
        background-color: #F5C7A9;
        color: #FCF8E8;
    }

    i{
        margin-left: 5px;
    }

`



export default FirstPage