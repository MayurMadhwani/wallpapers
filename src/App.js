import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import { useSelector } from "react-redux";
import { lightBackground, darkBackground } from "./colors/colors";
import ExplorePage from "./components/Content/explore_page";

function App() {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Main
      style={{
        backgroundColor: darkMode ? darkBackground : lightBackground,
      }}
    >
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  background-color: ${true ? "#FCF8E8" : "gray"};
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  transition-duration: 0.4s;
`;

export default App;
