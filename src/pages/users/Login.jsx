import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { $CombinedState } from "redux";

const Login = () => {
  //아이디 선언
  const [id, setId] = useState("");
  //오류메세지
  const [idMessage, setIdMessage] = useState("");
  //유효성검사
  const [isId, setIsId] = useState(false);

  const onChangeId = (e) => {
    const idRegex = /^[A-za-z0-9]{6,16}$/;
    console.log(e.target.value);
    setId(e.target.value);
    if (!idRegex.test(id)) {
      setIdMessage("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };

  return (
    <Container>
      <StTitle>회원가입</StTitle>
      <StBox>
        <hr />
        <Span>*</Span>필수입력사항
        <StRow>
          <StLabel>
            아이디<Span>*</Span>
          </StLabel>
          <StFormbox>
            <StInput
              type="text"
              placeholder="아이디를 입력해주세요"
              onChange={onChangeId}
            />
            {id.length > 0 && (
              <span className={`message ${isId ? "success" : "error"}`}>
                {idMessage}
              </span>
            )}
          </StFormbox>

          <StButton>중복확인</StButton>
        </StRow>
        <StRow>
          <StLabel>
            비밀번호<Span>*</Span>
          </StLabel>
          <StInput type="password" placeholder="비밀번호를 입력해주세요" />
        </StRow>
        <StRow>
          <StLabel>
            비밀번호확인<Span>*</Span>
          </StLabel>
          <StInput
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </StRow>
        <StRow>
          <StLabel>
            이름<Span>*</Span>
          </StLabel>
          <StInput placeholder="이름을 입력해주세요" />
        </StRow>
        <StRow>
          <StLabel>
            이메일<Span>*</Span>
          </StLabel>
          <StInput type="email" placeholder="예: marketkurly@kurly.com" />
          <StButton>중복확인</StButton>
        </StRow>
        <StRow>
          <StLabel>
            휴대폰<Span>*</Span>
          </StLabel>
          <StInput type="number" placeholder="숫자만 입력해주세요." />
          <StButton>인증번호 받기</StButton>
        </StRow>
        <StRow>
          <StLabel>
            주소<Span>*</Span>
          </StLabel>
          <StButton>주소검색</StButton>
          <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
        </StRow>
        <StRow>
          <StLabel>성별</StLabel>
          <StRadio type="radio" />
          <span>남자</span>
          <StRadio type="radio" />
          <span>여자</span>
          <StRadio type="radio" />
          <span>선택안함</span>
        </StRow>
        <StRow>
          <StLabel>생년월일</StLabel>
          <StDate>
            <div>
              <StDateInput placeholder="YYYY" />
            </div>
            <span>/</span>
            <div>
              <StDateInput placeholder="MM" />
            </div>
            <span>/</span>
            <div>
              <StDateInput placeholder="DD" />
            </div>
          </StDate>
        </StRow>
        <StRow>
          <StLabel>추가입력 사항</StLabel>
          <StRadio type="radio" />
          <span>친구초대 추천인 아이디</span>
          <StRadio type="radio" />
          <span>참여 이벤트명</span>
        </StRow>
        <hr />
        <Lower>
          <StColumn>
            <StLabel>이용약관동의</StLabel>
          </StColumn>
          <StColumn>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>전체 동의합니다.</div>
              <p>
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                이용약관 동의 <span>필수</span>
              </div>

              {/* <a>약관보기  </a> */}
              {/* > 태그모양 어떻게 처리?? */}
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                {" "}
                개인정보 수집∙이용 동의 <span>필수</span>
              </div>

              {/* <a>약관보기 ::after </a> */}
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                개인정보 수집∙이용 동의 <span>선택</span>
              </div>

              {/* <a>약관보기 ::after </a> */}
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                무료배송, 할인쿠폰 등 헤택/정보 수신 동의 <span>선택</span>
              </div>

              <div>
                <StCheckbox type="checkbox" />
                <span>SMS</span>
                <StCheckbox type="checkbox" />
                <span>이메일</span>
              </div>
              <p>
                동의 시 한 달간 5%적립 + 2만원 이상 무료배송 첫 주문 후 안내
              </p>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                본인은 만 14세 이상입니다.<span>선택</span>
              </div>
            </StRow>
          </StColumn>
        </Lower>
      </StBox>
      <StButton>가입하기</StButton>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  width: 800px; // px 말고 다른거??
  border: 1px solid black;
`;
const StTitle = styled.h2`
  font-weight: 700;
  text-align: center;
`;
const StBox = styled.div``;
const StRow = styled.div`
  display: inline-flex;
  padding: 10px 20px;

  width: 100%;
  .div {
  }
`;
const StLabel = styled.div`
  width: 139px;
  padding-top: 12px;
  font-weight: 500;
`;
const StInput = styled.input`
  height: 48px;
  flex: 1 1 0px;
  width: 100px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
`;
const StButton = styled.button`
  color: #8b00ff;
`;
const StColumn = styled.div``;
const StDate = styled.div`
  display: flex;
  border: 1px solid gray;
  padding: 10px;
  height: 40px;
`;
const StDateInput = styled.input`
  border: 0 solid black;
  height: 40px;
`;
const Span = styled.span`
  color: rgb(238, 106, 123);
`;

const StRadio = styled.input`
  color: #8b00ff;
`;
const StCheckbox = styled.input``;

const Lower = styled.div`
  display: flex;
`;
const StFormbox = styled.div`
  .message {
    font-size: 13px;
    margin-top: -4px;
  }
  &success {
  }
  &error {
    color: rgb(240, 63, 64);
  }
`;
