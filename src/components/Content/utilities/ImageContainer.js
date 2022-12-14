import React from 'react'
import styled from 'styled-components'
import { saveAs } from "file-saver";


const ImageContainer = ({url}) => {

    const download = ()=>{
        saveAs(url, 'wallpaper');
    }

  return (
    
    <Main
      onClick={download}>
        <img src={url} alt="Loading"/>
    </Main>
    
  )
}

const Main = styled.div`
    background-color: white;
    width: 350px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    transition-duration:0.4s;
    img{

        max-width: 95%;
        padding: 10px;
        max-height: 95%;
    }

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 768px) {
        
    }

    //animation

    animation-name: imageContainer;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;

    @keyframes imageContainer {
        from {opacity:0;width:0px;height:0px}
        to {opacity:1}
    }

`;

export default ImageContainer