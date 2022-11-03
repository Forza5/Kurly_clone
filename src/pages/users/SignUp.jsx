import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AcyncGetMember,
  AcyncCreateMember,
  AcyncEmailCheck,
  AcyncCodeCheck,
} from "../../modules/membersSlice";
import { Postcode } from "react-daum-postcode/lib/loadPostcode";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import "../css/signup.css";
import Layout from "../../common/Layout";

const SignUp = () => {
  // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const allAgreeHandler = (checked) => {
    setIsAllChecked(!isAllChecked);
    if (checked) {
      setCheckedItems([
        ...checkedItems,
        "provision",
        "privacy",
        "privacy2",
        "free",
        "sms",
        "email",
        "age",
      ]);
    } else if (
      (!checked && checkedItems.includes("provision")) ||
      (!checked && checkedItems.includes("privacy")) ||
      (!checked && checkedItems.includes("privacy2")) ||
      (!checked && checkedItems.includes("free")) ||
      (!checked && checkedItems.includes("sms")) ||
      (!checked && checkedItems.includes("email")) ||
      (!checked && checkedItems.includes("age"))
    ) {
      setCheckedItems([]);
    }
  };

  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  useEffect(() => {
    if (checkedItems.length >= 7) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [checkedItems]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //아이디 선언
  const [id, setId] = useState("");
  //오류메세지
  const [idMessage, setIdMessage] = useState("");
  //유효성검사
  const [isId, setIsId] = useState(false);
  //아이디 중복체크
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

  const emailRegex = /^[\w]+\@[a-z]+\.[a-z\.]{2,5}$/;
  const onChangeEmail = (e) => {
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

  //주소 선언
  const [address, setAddress] = useState("");
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
  // 상세주소 선언
  const [detailAddress, setDetailAddress] = useState("");
  const onChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };
  //생년월일 선언
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [date, setDate] = useState();

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };
  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  //회원정보
  const account = {
    id: id,
    password: pw,
    confirm: pwConfirm,
    name: name,
    email: email,
    phoneNum: phoneNum,
    address: address,
    detailaddress: detailAddress,
    birthday: year + month + date, //어떻게 보내줘야할지 확인 필요함
  };
  console.log(account);

  //가입하기 클릭 함수
  const onCreateHandler = () => {
    dispatch(AcyncCreateMember(account));
    navigate("/login");
  };
  //아이디 중복체크 버튼
  const onIdHandler = () => {
    dispatch(AcyncGetMember({ id: id }));
  };
  const [certi, setCerti] = useState(false);
  const redundantCheck = () => {
    if (emailRegex.test(email)) {
      dispatch(AcyncEmailCheck({ email: email }));
      setCerti(true);
    } else {
      alert("이메일형식으로 입력해주세요");
    }
  };
  const [emailCerti, setEmailCerti] = useState("");
  const onChangeCheckCode = (e) => {
    setEmailCerti(e.target.value);
  };
  const onCodeCheck = () => {
    dispatch(AcyncCodeCheck({ code: emailCerti }));
  };

  return (
    <Layout>
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

            <Button onClick={onIdHandler} width="120px" height="48px">
              중복확인
            </Button>
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

            <Button onClick={redundantCheck} width="120px" height="48px">
              중복확인
            </Button>
          </StRow>
          {certi ? (
            <StRow>
              <StLabel></StLabel>
              <StFormbox>
                <StInput
                  placeholder="3분내에 인증번호를 입력해주세요"
                  onChange={onChangeCheckCode}
                />
              </StFormbox>
              <Button onClick={onCodeCheck} width="120px" height="48px">
                인증번호 확인
              </Button>
            </StRow>
          ) : null}
          <StRow>
            <StLabel>
              휴대폰<Span>*</Span>
            </StLabel>
            <StFormbox>
              <StInput
                className="phone"
                type="tel"
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
            <Button width="120px" height="48px">
              인증번호 받기
            </Button>
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
              <StInput defaultValue={address} style={{ margin: "10px 0" }} />
              <StInput
                onChange={onChangeDetailAddress}
                placeholder="나머지 주소를 입력해주세요"
              />
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
              <AddCaution>
                배송지에 따라 상품 정보가 달라질 수 있습니다.
              </AddCaution>
            </StFormbox>
          </StRow>
          <StRow>
            <StLabel>성별</StLabel>
            <StBetween>
              <StRadioFlex>
                <StRadio type="radio" name="gender" value="male" />
                <RadioLabel style={{ verticalAlign: "middle" }}>
                  남자
                </RadioLabel>
              </StRadioFlex>
              <StRadioFlex>
                <StRadio type="radio" name="gender" value="female" />
                <RadioLabel style={{ verticalAlign: "middle" }}>
                  여자
                </RadioLabel>
              </StRadioFlex>
              <StRadioFlex>
                <StRadio type="radio" name="gender" value="none" />
                <RadioLabel style={{ verticalAlign: "middle" }}>
                  선택안함
                </RadioLabel>
              </StRadioFlex>
            </StBetween>
          </StRow>
          <StRow>
            <StLabel>생년월일</StLabel>
            <StFormbox>
              <StDate>
                <div>
                  <StDateInput
                    onChange={onChangeYear}
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                </div>
                <span>/</span>
                <div>
                  <StDateInput
                    onChange={onChangeMonth}
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                  />
                </div>
                <span>/</span>
                <div>
                  <StDateInput
                    onChange={onChangeDate}
                    type="text"
                    placeholder="DD"
                    maxLength={2}
                  />
                </div>
              </StDate>
            </StFormbox>
          </StRow>
          {/* <StRow>
            <StLabel style={{ height: "139px" }}>추가입력 사항</StLabel>
            <div>
              <StBetween style={{ width: "95%" }}>
                <StRadio type="radio" name="addtion" />
                <span>친구초대 추천인 아이디</span>
                <StRadio type="radio" name="addtion" />
                <span>참여 이벤트명</span>{" "}
              </StBetween>
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
              <StLabel>
                이용약관동의 <Span>*</Span>
              </StLabel>
            </StColumn>
            <StColumn>
              <StRow style={{ flexDirection: "column" }}>
                <AccessLabel>
                  <StCheckbox
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={(e) =>
                      allAgreeHandler(e.currentTarget.checked, e.target.value)
                    }
                  />

                  <AccessTitle>전체 동의합니다.</AccessTitle>
                </AccessLabel>

                <PadLeft>
                  선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                  이용할 수 있습니다.
                </PadLeft>
              </StRow>
              <StRow>
                <StHorizontal>
                  <div>
                    <AccessLabel>
                      <StCheckbox
                        type="checkbox"
                        value="provision"
                        checked={
                          checkedItems.includes("provision") ? true : false
                        }
                        onChange={(e) =>
                          agreeHandler(e.currentTarget.checked, e.target.value)
                        }
                      />
                      이용약관 동의 <SpanSub>(필수)</SpanSub>
                    </AccessLabel>
                  </div>

                  <WatchUse>약관보기 〉</WatchUse>
                </StHorizontal>
              </StRow>
              <StRow>
                <StHorizontal>
                  <div>
                    <AccessLabel>
                      <StCheckbox
                        type="checkbox"
                        value="privacy"
                        checked={
                          checkedItems.includes("privacy") ? true : false
                        }
                        onChange={(e) =>
                          agreeHandler(e.currentTarget.checked, e.target.value)
                        }
                      />
                      개인정보 수집∙이용 동의 <SpanSub>(필수)</SpanSub>
                    </AccessLabel>
                  </div>

                  <WatchUse>약관보기 〉</WatchUse>
                </StHorizontal>
              </StRow>
              <StRow>
                <StHorizontal>
                  <div>
                    <AccessLabel>
                      <StCheckbox
                        type="checkbox"
                        value="privacy2"
                        checked={
                          checkedItems.includes("privacy2") ? true : false
                        }
                        onChange={(e) =>
                          agreeHandler(e.currentTarget.checked, e.target.value)
                        }
                      />
                      개인정보 수집∙이용 동의 <SpanSub>(선택)</SpanSub>
                    </AccessLabel>
                  </div>

                  <WatchUse>약관보기 〉</WatchUse>
                </StHorizontal>
              </StRow>
              <StRow>
                <AccessLabel>
                  <StCheckbox
                    type="checkbox"
                    value="free"
                    checked={checkedItems.includes("free") ? true : false}
                    onChange={(e) =>
                      agreeHandler(e.currentTarget.checked, e.target.value)
                    }
                  />
                  무료배송, 할인쿠폰 등 헤택/정보 수신 동의{" "}
                  <SpanSub>(선택)</SpanSub>
                </AccessLabel>
              </StRow>
              <StRow style={{ paddingLeft: "40px" }}>
                <AccessDiv>
                  <StCheckbox
                    type="checkbox"
                    value="sms"
                    checked={checkedItems.includes("sms") ? true : false}
                    onChange={(e) =>
                      agreeHandler(e.currentTarget.checked, e.target.value)
                    }
                  />
                  <span>SMS</span>
                </AccessDiv>
                <AccessDiv>
                  <StCheckbox
                    type="checkbox"
                    value="email"
                    checked={checkedItems.includes("email") ? true : false}
                    onChange={(e) =>
                      agreeHandler(e.currentTarget.checked, e.target.value)
                    }
                  />
                  <span>이메일</span>
                </AccessDiv>
              </StRow>
              <PlusCont>
                동의 시 한 달간 [5%적립] + [2만원 이상] 무료배송 첫 주문 후 안내
              </PlusCont>

              <StRow>
                <AccessLabel>
                  <StCheckbox
                    type="checkbox"
                    value="age"
                    checked={checkedItems.includes("age") ? true : false}
                    onChange={(e) =>
                      agreeHandler(e.currentTarget.checked, e.target.value)
                    }
                  />
                  본인은 만 14세 이상입니다.<SpanSub>(필수)</SpanSub>
                </AccessLabel>
              </StRow>
            </StColumn>
          </Lower>
        </div>
        <CenterDiv>
          <StButton onClick={onCreateHandler}>가입하기</StButton>
        </CenterDiv>
      </Container>
    </Layout>
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
  display: flex;
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
  font-size: 14px;
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
  outline: 0;
  :focus {
    border: 1px solid #000;
  }
`;
//이용약관동의 라벨
const StColumn = styled.div`
  padding-top: 15px;
`;
//생년월일 테두리
const StDate = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  padding: 10px;
  height: 46px;
  width: 100%;
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
  appearance: none;
  vertical-align: middle;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  :checked {
    border: 0.6em solid rgb(95, 0, 128);
  }
`;
//이용약관 동의 체크박스
const StCheckbox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin-right: 10px;
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
//라디오 flex
const StRadioFlex = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(51, 51, 51);
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
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: rgb(255, 255, 255);
  border: 1px solid #512772;
  width: 240px;
  height: 54px;
  background-color: #512772;
  cursor: pointer;
  margin-bottom: 20px;
`;

const StHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const StBetween = styled.div`
  font-size: 16px;
  line-height: 2rem;
  padding: 0.2em 0.4em;
  display: flex;
  flex-direction: row;
  text-align: justify;
  justify-content: space-between;
  width: 50%;
`;

const AddCaution = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  color: rgb(102, 102, 102);
`;

const CenterDiv = styled.div`
  text-align: center;
  margin: 30px 0 60px 0;
`;

const RadioLabel = styled.label`
  margin-left: 7px;
`;

const AccessLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(51, 51, 51);
`;

const AccessTitle = styled.span`
  color: rgb(51, 51, 51);
  font-weight: 500;
  font-size: 18px;
`;

const PadLeft = styled.p`
  padding-left: 36px;
  font-size: 12px;
  padding-top: 4px;
  color: rgb(102, 102, 102);
`;

const WatchUse = styled.div`
  color: rgb(95, 0, 128);
  font-size: 14px;
`;

const AccessDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(51, 51, 51);
  :first-child {
    margin-right: 80px;
  }
`;

const PlusCont = styled.p`
  color: rgb(95, 0, 128);
  background: url("https://res.kurly.com/pc/service/common/2006/ico_sub_dot.svg")
    0px 0px / 16px 20px no-repeat;
  font-size: 12px;
  margin-left: 74px;
  padding-left: 16px;
`;

const SpanSub = styled.span`
  display: inline-block;
  margin-left: 5px;
  color: rgb(153, 153, 153);
`;
