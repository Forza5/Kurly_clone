import styled from "styled-components";

const Button = ({ children, onClick, width, height }) => {
  return (
    <Stbutton type="button" onClick={onClick} style={{ width: width, height }}>
      {children}
    </Stbutton>
  );
};

export default Button;

const Stbutton = styled.button`
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
  color: #512772;
  border: 1px solid #512772;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`;
