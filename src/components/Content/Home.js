import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar';
import Overlay from '../Overlay';
import { Route, Routes } from 'react-router-dom';
import All from './Categories/All';
import Animals from './Categories/Animals';
import Architecture from './Categories/Architecture';
import Birds from './Categories/Birds';
import Creative from './Categories/Creative';
import Flowers from './Categories/Flowers';
import Lowlight from './Categories/Lowlight';
import Macro from './Categories/Macro';
import Nature from './Categories/Nature';
import Street from './Categories/Street';
import Sunset from './Categories/Sunset';

const Home = () => {

  return (
    <Main>

      <Overlay/>

      <Content>
        
        <Navbar/>

        <Routes>
          <Route path='' element={<All/>}/>
          <Route path='animals' element={<Animals/>}/>
          <Route path='architecture' element={<Architecture/>}/>
          <Route path='birds' element={<Birds/>}/>
          <Route path='creative' element={<Creative/>}/>
          <Route path='flowers' element={<Flowers/>}/>
          <Route path='lowlight' element={<Lowlight/>}/>
          <Route path='macro' element={<Macro/>}/>
          <Route path='nature' element={<Nature/>}/>
          <Route path='creative' element={<Creative/>}/>
          <Route path='street' element={<Street/>}/>
          <Route path='sunset' element={<Sunset/>}/>

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