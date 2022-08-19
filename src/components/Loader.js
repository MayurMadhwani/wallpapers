import React from 'react'
import styled from 'styled-components'

const Loader = (props) => {
  return (
    <Container>
      <Image src = {props.image}/>
    </Container>
  )
}

const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
    margin-top: auto;
    margin-bottom: auto;
    min-width: 200px;
    transition-duration: 0.4s;
    width: 20%;
`

export default Loader