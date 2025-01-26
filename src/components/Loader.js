import React from "react";
import styled from "styled-components";
import lightloading from "../images/lightloading.gif";
import darkloading from "../images/darkloading.gif";
import { useSelector } from "react-redux";

const Loader = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Container>
      <Image src={darkMode ? darkloading : lightloading} />
    </Container>
  );
};

const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
`;

const Image = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  min-width: 200px;
  transition-duration: 0.4s;
  width: 20%;
  transition-duration: 0.4s;
`;

export default Loader;
