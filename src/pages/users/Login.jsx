import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button";
import Layout from "../../common/Layout";
import { AcyncLoginMember } from "../../modules/membersSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const onLoginHandler = () => {
    console.log("로그인핸들러");
    dispatch(AcyncLoginMember(account));
    navigate("/");
  };

  return (
    <Layout>
      <LgContainer>
        <StLgTitle>로그인</StLgTitle>
        <StLgForm>
          <StLgInput
            type="text"
            name="id"
            onChange={onChange}
            placeholder="아이디를 입력해주세요"
          />
          <StLgInput
            type="password"
            name="password"
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
          />
          <StLgFind>
            <FindList>
              <FindLists>아이디 찾기</FindLists>
              <FindLists>비밀번호 찾기</FindLists>
            </FindList>
          </StLgFind>
          <StButton onClick={onLoginHandler}>로그인</StButton>
          <Button
            width="100%"
            height="54px"
            onClick={() => navigate(`/signup`)}
          >
            회원가입
          </Button>
        </StLgForm>
      </LgContainer>
    </Layout>
  );
};

export default Login;

const LgContainer = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
`;

const StLgTitle = styled.div`
  font-weight: 500;
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
  outline: 0;
  :focus {
    border: 1px solid rgb(51, 51, 51);
  }
`;

const StLgFind = styled.div`
  float: right;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const StButton = styled.button`
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: rgb(255, 255, 255);
  border: 1px solid #512772;
  width: 100%;
  height: 54px;
  background-color: #512772;
  cursor: pointer;
  margin-bottom: 20px;
`;

const FindList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(51, 51, 51);
`;

const FindLists = styled.li`
  ::after {
    content: "";
    display: inline-block;
    width: 1px;
    background: rgb(51, 51, 51);
    height: 11px;
    margin: 0 5px;
  }
  :last-child::after {
    display: none;
  }
`;
