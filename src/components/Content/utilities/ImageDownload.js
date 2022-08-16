import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { saveAs } from "file-saver";

const ImageDownload = () => {

    const { state } = useLocation();
    const { url } = state;

    const download = ()=>{
        saveAs(url, 'wallpaper');
    }

  return (
    <Main>
        <img onClick={download} src={url} alt="Loading"/>
        <Button onClick={download}>
            Download
        </Button>
    </Main>
  )
}

const Main = styled.div`

    background-color: red;
    min-height: 90%;
    width: 500px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    animation-name: download;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    background-color: #FEFBF6;
    transition-duration: 0.5s;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    //animation
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;

    @keyframes download {
        from {opacity:0;width:0px;}
        to {opacity:1}
    }

    img{
        max-height: 90%;
        max-width: 90%;
        padding: 20px;
        cursor: pointer;
    }

`

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
    color: #DF7861;
    
    &:hover {
        background-color: #F5C7A9;
        color: white;
        a{
            color: #FCF8E8;
        }
    }
`

export default ImageDownload