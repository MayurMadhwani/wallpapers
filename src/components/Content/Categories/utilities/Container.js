import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
  return (
    <Main>{props.children}</Main>
  )
}

const Main = styled.div`
  
  display: grid;
  grid-column-start: 1;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  transition-duration: 0.4s;
  animation-timing-function: ease;
  margin-bottom: 20px;
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto
  }

`

export default Container