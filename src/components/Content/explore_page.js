import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import ListOfWallpapers from "../explore/list_of_wallpapers";

const ExplorePage = () => {
  return (
    <Main>

      <Content>
        <Navbar />
        <ListOfWallpapers />
        
        <hr />
      </Content>
    </Main>
  );
};

const Main = styled.div`
  height: 100%;
  min-width: 100%;
  width: auto;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ExplorePage;
