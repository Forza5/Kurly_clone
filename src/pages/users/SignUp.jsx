import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AcyncCreateMember } from "../../modules/membersSlice";
import { Postcode } from "react-daum-postcode/lib/loadPostcode";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import "../css/signup.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //아이디 선언
  const [id, setId] = useState("");
  //오류메세지
  const [idMessage, setIdMessage] = useState("");
  //유효성검사
  const [isId, setIsId] = useState(false);

  const onChangeId = (e) => {
    const idRegex = /^[A-za-z0-9]{6,16}$/;
    setId(e.target.value);
    if (!idRegex.test(id)) {
      setIdMessage("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };
  //비밀번호 선언
  const [pw, setPw] = useState("");
  //오류메세지
  const [pwMessage, setPwMessage] = useState("");
  //유효성검사
  const [isPw, setIsPw] = useState(false);

  const onChangePw = (e) => {
    const pwRegex = /^[A-za-z0-9]{10,}$/;
    setPw(e.target.value);
    if (!pwRegex.test(pw)) {
      setPwMessage("최소 10자 이상 입력");
      setIsPw(false);
    } else {
      setPwMessage("");
      setIsPw(true);
    }
  };
  //비밀번호 확인 선언
  const [pwConfirm, setPwConfirm] = useState("");
  //오류메세지
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");
  //유효성검사
  const [isPwConfirm, setIsPwConfirm] = useState(false);

  const onChangePwConfirm = (e) => {
    console.log(e.target.value);
    setPwConfirm(e.target.value);
    if (pw !== pwConfirm) {
      setPwConfirmMessage("동일한 비밀번호를 입력");
      setIsPwConfirm(false);
    } else {
      setPwConfirmMessage("");
      setIsPwConfirm(true);
    }
  };
  //이름 선언
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  //이메일 선언
  const [email, setEmail] = useState("");
  //오류메세지
  const [emailMessage, setEmailMessage] = useState("");
  //유효성검사
  const [isEmail, setIsEmail] = useState(false);

  const onChangeEmail = (e) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    console.log(e.target.value);
    setEmail(e.target.value);
    if (!emailRegex.test(email)) {
      setEmailMessage("이메일 형식으로 입력해 주세요");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };
  //핸드폰 번호 선언
  const [phoneNum, setPhoneNum] = useState("");
  //오류메세지
  const [phoneNumMessage, setPhoneNumMessage] = useState("");
  //유효성검사
  const [isPhoneNum, setIsPhoneNum] = useState(false);

  const onChangePhoneNum = (e) => {
    const PhoneNumRegex = /^[0-9]{0,11}$/;
    console.log(e.target.value);
    setPhoneNum(e.target.value);
    if (!PhoneNumRegex.test(phoneNum)) {
      setPhoneNumMessage("휴대폰 번호를 입력해 주세요");
      setIsPhoneNum(false);
    } else {
      setPhoneNumMessage("");
      setIsPhoneNum(true);
    }
  };

  //주소검색
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  const [address, setAddress] = useState("");

  //회원정보
  const account = {
    id: id,
    password: pw,
    confirm: pwConfirm,
    name: name,
    email: email,
    phoneNum: phoneNum,
    address: "",
    detailaddress: "",
    birthday: "",
  };

  //가입하기 클릭 함수
  const onCreateHandler = () => {
    // dispatch(AcyncCreateMember(account));
    // navigate("/members/login");
  };

  return (
    <Container>
      <StTitle>회원가입</StTitle>
      <div>
        <StLine>
          <Span>*</Span>
          필수입력사항
        </StLine>

        <StRow>
          <StLabel>
            아이디<Span>*</Span>
          </StLabel>
          <StFormbox>
            <div>
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
            </div>
          </StFormbox>

          <Button width="150px">중복확인</Button>
        </StRow>
        <StRow>
          <StLabel>
            비밀번호<Span>*</Span>
          </StLabel>
          <StFormbox>
            <StInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangePw}
            />
            {pw.length > 0 && (
              <span className={`message ${isPw ? "success" : "error"}`}>
                {pwMessage}
              </span>
            )}
          </StFormbox>
        </StRow>
        <StRow>
          <StLabel>
            비밀번호확인<Span>*</Span>
          </StLabel>
          <StFormbox>
            <StInput
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              onChange={onChangePwConfirm}
            />
          </StFormbox>
        </StRow>
        <StRow>
          <StLabel>
            이름<Span>*</Span>
          </StLabel>
          <StFormbox>
            <StInput
              placeholder="이름을 입력해주세요"
              onChange={onChangeName}
            />
          </StFormbox>
        </StRow>
        <StRow>
          <StLabel>
            이메일<Span>*</Span>
          </StLabel>
          <StFormbox>
            <StInput
              type="email"
              placeholder="예: marketkurly@kurly.com"
              onChange={onChangeEmail}
            />
            {email.length > 0 && (
              <span className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </span>
            )}
          </StFormbox>

          <Button width="150px">중복확인</Button>
        </StRow>
        <StRow>
          <StLabel>
            휴대폰<Span>*</Span>
          </StLabel>
          <StFormbox>
            <StInput
              className="phone"
              type="number"
              placeholder="숫자만 입력해주세요."
              onChange={onChangePhoneNum}
              onkeypress="checkNumber(event)"
            />
            {phoneNum.length > 0 && (
              <span className={`message ${isPhoneNum ? "success" : "error"}`}>
                {phoneNumMessage}
              </span>
            )}
          </StFormbox>
          <Button width="150px">인증번호 받기</Button>
        </StRow>
        <StRow>
          <StLabel>
            주소<Span>*</Span>
          </StLabel>
          <StFormbox>
            <Button onClick={openPostCode} width="100%" height="50px">
              <span>
                <Img
                  src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
                  alt="주소검색"
                />
                주소검색
              </span>
            </Button>
            <StInput value={address} />
            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode
                    onClose={closePostCode}
                    setAddress={setAddress}
                  />
                </PopupDom>
              )}
            </div>
            <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
          </StFormbox>
        </StRow>
        <StRow>
          <StLabel>성별</StLabel>
          <StRadio type="radio" name="gender" value="male" />
          <span>남자</span>
          <StRadio type="radio" name="gender" value="female" />
          <span>여자</span>
          <StRadio type="radio" name="gender" value="none" />
          <span>선택안함</span>
        </StRow>
        <StRow>
          <StLabel>생년월일</StLabel>
          <StFormbox>
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
          </StFormbox>
        </StRow>
        <StRow>
          <StLabel style={{ height: "139px" }}>추가입력 사항</StLabel>
          <div>
            <div>
              <StRadio type="radio" name="addtion" />
              <span>친구초대 추천인 아이디</span>
              <StRadio type="radio" name="addtion" />
              <span>참여 이벤트명</span>{" "}
            </div>
            <StFormbox>
              <StInput placeholder="추천인 아이디를 입력해주세요." />
              <p>
                가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이
                지급됩니다.
              </p>
            </StFormbox>
          </div>
        </StRow>
        {/* 추가입력창 띄우는건 나중에;; */}
        <StRow></StRow>

        <StLine />
        <Lower>
          <StColumn>
            <StLabel>이용약관동의</StLabel>
          </StColumn>
          <StColumn>
            <StRow>
              <StVertical>
                <StCheckbox type="checkbox" />
                <div style={{ display: "flex" }}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                    alt=""
                  ></img>
                  <span>전체 동의합니다.</span>
                </div>

                <p>
                  선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                  이용할 수 있습니다.
                </p>
              </StVertical>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <StHorizontal>
                <div>
                  이용약관 동의 <span>(필수)</span>
                </div>

                <div>약관보기 〉</div>
              </StHorizontal>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <StHorizontal>
                <div>
                  개인정보 수집∙이용 동의 <span>(필수)</span>
                </div>
                <div>약관보기 〉</div>
              </StHorizontal>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <StHorizontal>
                <div>
                  개인정보 수집∙이용 동의 <span>(선택)</span>
                </div>
                <div>약관보기 〉</div>
              </StHorizontal>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                무료배송, 할인쿠폰 등 헤택/정보 수신 동의 <span>(선택)</span>
              </div>
            </StRow>
            <StRow>
              <StCheckbox type="checkbox" />
              <span>SMS</span>
              <StCheckbox type="checkbox" />
              <span>이메일</span>
            </StRow>
            <p>
              동의 시 한 달간 [5%적립] + [2만원 이상] 무료배송 첫 주문 후 안내
            </p>

            <StRow>
              <StCheckbox type="checkbox" />
              <div>
                본인은 만 14세 이상입니다.<span>(필수)</span>
              </div>
            </StRow>
          </StColumn>
        </Lower>
      </div>
      <>
        <StButton onClick={onCreateHandler}>가입하기</StButton>
      </>
    </Container>
  );
};

export default SignUp;

//전체
const Container = styled.div`
  width: 680px; // px 말고 다른거??
  margin: 0 auto;
`;
//회원가입 제목
const StTitle = styled.h2`
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  margin: 50px 0;
`;
//항목 전체 박스
const StRow = styled.div`
  display: inline-flex;
  padding: 10px 20px;

  width: 100%;
  .div {
  }
`;
//항목
const StLabel = styled.div`
  width: 139px;
  padding-top: 12px;
  font-weight: 500;
`;
//모든 인풋
const StInput = styled.input`
  height: 48px;
  width: 100%;
  padding: 0px 11px 1px 15px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
`;
//이용약관동의 라벨
const StColumn = styled.div`
  padding: 10px 20px;
`;
//생년월일 테두리
const StDate = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px;
  height: 40px;
  width: 330px;
`;
//생년월일 인풋
const StDateInput = styled.input`
  border: 0 solid black;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
`;
//필수사항 별
const Span = styled.span`
  color: rgb(238, 106, 123);
`;
//셩별, 추가입력사항
const StRadio = styled.input`
  color: #8b00ff;
`;
//이용약관 동의 체크박스
const StCheckbox = styled.input`
  appearance: none;
`;
//약관동의 부분
const Lower = styled.div`
  display: flex;
`;
//인풋과 안내문구 박스
const StFormbox = styled.div`
  margin-right: 12px;
  width: 350px;

  .message {
    font-size: 13px;
    margin-top: -4px;
    &.success {
    }
    &.error {
      color: rgb(240, 63, 64);
    }
  }
`;
//수평선
const StLine = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(51, 51, 51);
  color: rgb(102, 102, 102);
  text-align: right;
`;
//주소검색 돋보기 이미지
const Img = styled.img`
  position: relative;
  top: 4px;
`;

//가입하기 보라색 버튼
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
//문장 세로 정렬
const StVertical = styled.div`
  display: flex;
  flex-direction: column;
`;
//문장 가로 정렬
const StHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  text-align: justify;
  justify-content: space-between;
  width: 100%;
`;
