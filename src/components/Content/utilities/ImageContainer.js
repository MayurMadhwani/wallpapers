import React from 'react'
import styled from 'styled-components'

const ImageContainer = (props) => {
  return (
    <Main>
        <img src={props.url} alt="Loading"/>
        <Button>
            <A href={props.url} download>Download</A>
        </Button>
    </Main>
  )
}

const Main = styled.div`
    
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    transition-duration: 0.2s;
    background-color: #FEFBF6;
    
    img{
        width: 95%;
        padding: 20px;
    }

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 768px) {
        /* width: 80%; */
        
    }

`;

const Button = styled.button`
    
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    margin-bottom: 15px;
    transition-duration: 0.1s;
    border: 1px solid #F5C7A9;
    border-radius: 5px;
    width: 85%;
    letter-spacing: 1px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    z-index: 1;
    background-color: #FEFBF6;
    
    &:hover {
        background-color: #F5C7A9;
        color: white;
        a{
            color: #FCF8E8;
        }
    }
`

const A = styled.a`
    text-decoration: none;
    /* color: #FF5D5D; */
    color: #DF7861;
    
`

export default ImageContainer