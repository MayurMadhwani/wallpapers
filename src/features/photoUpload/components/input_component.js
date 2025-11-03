import styled from "styled-components";
import { useSelector } from "react-redux";
import { solidLight, solidDark } from "../../../colors/colors";

const InputComponent = ({ icon, placeholder, onChange, type }) => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <Main>
      <Image src={icon} />
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={20}
        style={{
          borderColor: solidLight,
        }}
      />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const Input = styled.input`
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 1px;
  /* border-color: gray; */
`;

export default InputComponent;
