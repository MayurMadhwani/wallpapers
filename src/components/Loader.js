import React from 'react'
import styled from 'styled-components'

const Loader = (props) => {
  return (
    <Image src = {props.image}/>
  )
}

const Image = styled.img`
    margin-top: auto;
    margin-bottom: auto;
    min-width: 200px;
    transition-duration: 0.4s;
    width: 20%;
`

export default Loader