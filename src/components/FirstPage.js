import React,{useState} from 'react'
import styled, { css } from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { darkBackground, darkText, lightBackground, lightText, solidDark, solidLight } from '../colors/colors';

const FirstPage = () => {

    const darkmode = useSelector(state=>state.darkmode.value);
    const lightUrl = 'https://images4.alphacoders.com/255/255596.jpg';
    const darkUrl = 'https://wallpaperaccess.com/full/5708316.jpg';

    const navigate = useNavigate();

    const goToHome = ()=>{
        navigate('/home');
    }
    
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


  return (
    
    <Main>
        <Image
            style={{
                backgroundImage:`url(${darkmode?darkUrl:lightUrl})`
                
            }}
        >
            <Button 
                
                style={{
                    color:darkmode?
                        isHovering?darkBackground:solidDark:
                        isHovering?lightText:solidLight,
                    backgroundColor:darkmode?
                        isHovering?solidDark:darkBackground:
                        isHovering?'#F5C7A9':lightBackground,
                }}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={goToHome}>
                
                Explore
                <i className="fa-solid fa-arrow-right"/>
                
            </Button> 

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

    animation-name: main;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease;

    @keyframes main {
        from {opacity:0;width:0px;height:0px}
        to {opacity:1}
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
    border: none;
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
    }

    i{
        margin-left: 5px;
    }

    animation-name: button;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease;

    @keyframes button {
        from {opacity:0;width:0px;height:0px}
        to {opacity:1}
    }

`


export default FirstPage