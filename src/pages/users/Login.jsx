import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LgContainer>
      <StLgTitle>로그인</StLgTitle>
      <StLgForm>
        <StLgInput type="text" placeholder="아이디를 입력해주세요" />
        <StLgInput type="password" placeholder="비밀번호를 입력해주세요" />
        <StLgFind>
          <div>아이디찾기</div>
          <span>|</span>
          <div>비밀번호 찾기</div>
        </StLgFind>
        <StButton>로그인</StButton>
        <Button width="100%" height="54px" onClick={() => navigate(`/signup`)}>
          회원가입
        </Button>
      </StLgForm>
    </LgContainer>
  );
};

export default Login;

const LgContainer = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
`;

const StLgTitle = styled.div`
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;
const StLgForm = styled.div`
  width: 340px;
  margin: 0 auto;
`;

const StLgInput = styled.input`
  height: 54px;
  width: 100%;
  padding: 0px 11px 1px 15px;
  padding: 0px 11px 1px 15px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
`;

const StLgFind = styled.div`
  float: right;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const StButton = styled.button`
  border-radius: 4px;
  font-weight: 800;
  font-size: 16px;
  text-align: center;
  color: rgb(255, 255, 255);
  border: 1px solid #512772;
  width: 100%;
  height: 54px;
  background-color: #512772;
  cursor: pointer;
  margin-bottom: 20px;
`;
