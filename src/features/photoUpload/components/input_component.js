import styled from "styled-components";

import profileIcon from "../../../assets/icons/profile.png";

const InputComponent = ({icon, placeholder, onChange}) => {
  return (
    <div>
      <Image src={profileIcon}/>
      <Input type="text" placeholder="Username"  onChange={(value) => console.log(value.target.value)}/>
    </div>
  );
};

const Image = styled.img`
  height: 30px;
  width: 30px;
`;

const Input = styled.input``;

export default InputComponent;
