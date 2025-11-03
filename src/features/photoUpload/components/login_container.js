import styled from "styled-components";
import profileIcon from "../../../assets/icons/profile.png";
import keyIcon from "../../../assets/icons/key.png";
import InputComponent from "./input_component";

const LoginContainer = () => {


  const onUsernameChange = (e) => {
    console.log(e.target.value);
  };

  const onPasswordChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Main>
      {/* <label for="fname">First name:</label> */}

      <InputComponent
        type={"text"}
        icon={profileIcon}
        placeholder={"Username"}
        onChange={onUsernameChange}
      />

      <br />
      <InputComponent
        type={"password"}
        icon={keyIcon}
        placeholder={"password"}
        onChange={onPasswordChange}
      />
      <br />
      {/* <input type="submit" value="Submit" /> */}
    </Main>
  );
};

const Main = styled.div`
  background-color: white;
  padding: 100px 100px 100px 100px;
  /* width: 350px; */
  /* min-height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  /* cursor: pointer; */
  transition-duration: 0.4s;
  /* img{

        max-width: 95%;
        padding: 10px;
        max-height: 95%;
    } */

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 768px) {
        
    }

  //animation

  animation-name: imageContainer;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;

  @keyframes imageContainer {
    from {
      opacity: 0;
      width: 0px;
      height: 0px;
    }
    to {
      opacity: 1;
    }
  }
`;

export default LoginContainer;
