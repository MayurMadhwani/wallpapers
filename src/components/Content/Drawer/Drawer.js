import React from "react";
import styled from "styled-components";
import Navlink from "./Navlink";
import { useSelector } from "react-redux";
import {
  darkBackground,
  darkText,
  lightBackground,
  lightText,
  solidDark,
  solidLight,
} from "../../../colors/colors";

const Drawer = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Main
      style={{
        color: darkMode ? solidDark : solidLight,
      }}
    >
      <Bar
        style={{
          width: "300px",
          backgroundColor: darkMode ? darkBackground : lightBackground,
        }}
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <Heading>Categories</Heading>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <hr />

          <Categories>
            {/* <Link to='/home'className="nav-link active" aria-current="page" >This area is under construction</Link> */}

            <Navlink path={"animals"} categoryStr={"Animal"} />
            <Navlink path={"architecture"} categoryStr={"Architecture"} />
            <Navlink path={"birds"} categoryStr={"Bird"} />
            <Navlink path={"creative"} categoryStr={"Creative"} />
            <Navlink path={"flowers"} categoryStr={"Flowers"} />
            <Navlink path={"lowlight"} categoryStr={"Lowlight"} />
            <Navlink path={"macro"} categoryStr={"Macro"} />
            <Navlink path={"nature"} categoryStr={"Nature"} />
            <Navlink path={"street"} categoryStr={"Street"} />
            <Navlink path={"sunset"} categoryStr={"Sunset"} />
          </Categories>
        </div>
      </Bar>
    </Main>
  );
};

const Main = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const Heading = styled.h5``;

const Bar = styled.div``;

const Categories = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export default Drawer;
