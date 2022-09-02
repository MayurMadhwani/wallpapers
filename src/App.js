import styled from 'styled-components'
import FirstPage from './components/FirstPage';
import Home from './components/Content/Home';
import {Routes, Route} from 'react-router-dom';
import About from './components/about/About';


function App() {

  return (
    <Main >
      <Routes>
        
        <Route 
          path='/' 
          element={<FirstPage/>}
        />

        <Route
          path='/home/*' 
          element={<Home/>}
        />

        <Route
          path='/about' 
          element={<About/>}
        />

      </Routes>
    </Main>
  );
}

const Main = styled.div`
  background-color: ${true?'#FCF8E8':'gray'};
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`

export default App;
