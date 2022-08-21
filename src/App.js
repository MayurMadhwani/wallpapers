import styled from 'styled-components'
import FirstPage from './components/FirstPage';
import Home from './components/Content/Home';
import {Routes, Route} from 'react-router-dom';
import ImageDownload from './components/Content/utilities/ImageDownload';
import About from './components/About';


function App() {

  return (
    <Main>
      <Routes>
        
        <Route 
          path='/' 
          element={<FirstPage/>}
        />

        <Route
          path='/home' 
          element={<Home/>}
        />

        <Route
          path='/home/downloadImage' 
          element={<ImageDownload/>}
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
  background-color: #FCF8E8;
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`

export default App;
