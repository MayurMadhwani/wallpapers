import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  darkText,
  lightText,
  solidDark,
  solidLight,
} from "../../colors/colors";

const instagramUrl = "https://www.instagram.com/mayur_madhwani03/";
const linkedinUrl = "https://www.linkedin.com/in/mayur-madhwani/";
const twitterUrl = "https://twitter.com/mayur_madhwani_";
const facebookUrl = "https://www.facebook.com/mayurmadhwani03/";
const youtubeUrl = "https://www.youtube.com/channel/UCv6MKB7nN43ILzWxuDn8RRA";

const BottomContainer = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Main
      style={{
        color: darkMode ? darkText : lightText,
      }}
    >
      <Instagram
        style={{
          backgroundColor: darkMode ? solidDark : solidLight,
        }}
        onClick={() => {
          window.open(instagramUrl);
        }}
        className="fa-brands fa-instagram"
      >
        <span>Instagram</span>
      </Instagram>
      <Linkedin
        style={{
          backgroundColor: darkMode ? solidDark : solidLight,
        }}
        onClick={() => {
          window.open(linkedinUrl);
        }}
        className="fa-brands fa-linkedin-in"
      >
        <span>Linkedin</span>
      </Linkedin>
      <Twitter
        style={{
          backgroundColor: darkMode ? solidDark : solidLight,
        }}
        onClick={() => {
          window.open(twitterUrl);
        }}
        className="fa-brands fa-twitter"
      >
        <span>Twitter</span>
      </Twitter>
      <Facebook
        style={{
          backgroundColor: darkMode ? solidDark : solidLight,
        }}
        onClick={() => {
          window.open(facebookUrl);
        }}
        className="fa-brands fa-facebook-f"
      >
        <span>Facebook</span>
      </Facebook>
      <Youtube
        style={{
          backgroundColor: darkMode ? solidDark : solidLight,
        }}
        onClick={() => {
          window.open(youtubeUrl);
        }}
        className="fa-brands fa-youtube"
      >
        <span>YouTube</span>
      </Youtube>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  max-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    border-radius: 50px;
    text-align: center;
    width: 50px;
    padding: 4px;
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
      margin: auto;
    }

    span {
      position: absolute;
      opacity: 0;
      font-size: 0px;
      color: black;
      transition-duration: 0.4s;
    }

    &:hover {
      transition-duration: 0.4s;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      span {
        font-family: "Open Sans", sans-serif;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 80px;
        border-radius: 5px;
        margin-bottom: 80px;
        font-size: 12px;
      }
    }
  }
`;

const Instagram = styled.i`
  &:hover {
    color: white;
    background: #f09433;
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    span {
      color: white;
      background: #f09433;
      background: #d6249f;
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
    }
  }
`;

const Linkedin = styled.i`
  &:hover {
    color: white;
    background-color: #0a66c2;
    span {
      color: white;
      background-color: #0a66c2;
    }
  }
`;

const Facebook = styled.i`
  &:hover {
    color: white;
    background-color: #4267b2;
    span {
      color: white;
      background-color: #4267b2;
    }
  }
`;

const Twitter = styled.i`
  &:hover {
    color: white;
    background-color: #1ca1f1;
    span {
      color: white;
      background-color: #1ca1f1;
    }
  }
`;
const Youtube = styled.i`
  &:hover {
    color: white;
    background-color: #ff0000;
    span {
      color: white;
      background-color: #ff0000;
    }
  }
`;

export default BottomContainer;
