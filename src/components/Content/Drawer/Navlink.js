import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  darkBackground,
  darkText,
  lightBackground,
  lightText,
  solidDark,
  solidLight,
} from "../../../colors/colors";
import { updateCategory } from "../../../features/category/categorySlice";

const Navlink = ({ path, categoryStr }) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const categorySelected = useSelector((state) => state.category.value);
  var isActive = categorySelected === categoryStr;
  const dispatch = useDispatch();

  var update = () => {
    console.log(categoryStr);
    dispatch(updateCategory(categoryStr));
  };

  return (
    <NavLink
      style={() => ({
        backgroundColor: darkMode
          ? isActive
            ? solidDark
            : darkBackground
          : isActive
          ? solidLight
          : lightBackground,
        color: darkMode
          ? isActive
            ? darkText
            : solidDark
          : isActive
          ? lightBackground
          : solidLight,
        ...buttonStyle,
      })}
      to="#"
      className="nav-link active"
      aria-current="page"
      onClick={update}
    >
      {categoryStr}
    </NavLink>
  );
};

const buttonStyle = {
  padding: "2px 32px",
  textAlign: "center",
  fontSize: "18px",
  marginTop: "10px",
  transitionDuration: "0.2s",
  border: "none",
  width: "100%",
  letterSpacing: "2px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default Navlink;
