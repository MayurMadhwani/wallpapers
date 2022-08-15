import styled from 'styled-components'
import FirstPage from './components/FirstPage';
import Home from './components/Content/Home';
import {Routes, Route, Link} from 'react-router-dom';


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
