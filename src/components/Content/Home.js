import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar';
import Overlay from '../Overlay';
import { Route, Routes } from 'react-router-dom';
import All from './Categories/All';
import Animals from './Categories/Animals';
import Macro from './Categories/Macro';

const Home = () => {

  return (
    <Main>

      <Overlay/>

      <Content>
        
        <Navbar/>

        <Routes>
          <Route path='' element={<All/>}/>
          <Route path='animals' element={<Animals/>}/>
          <Route path='macro' element={<Macro/>}/>
        </Routes>
        

      </Content>
    </Main>
  )
}

const Main = styled.div`
  height: 100%;
  min-width: 100%;
  width: auto;
  display:flex;
  justify-content: center;
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export default Home