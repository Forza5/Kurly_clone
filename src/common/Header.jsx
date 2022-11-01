import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../pages/css/font.css";
import "../pages/css/reset.css";
import { useNavigate, Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import logo from "../pages/img/logo.svg";
import { FiSearch } from "react-icons/fi";
import "../pages/css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [displays, setDisplays] = useState({ display: "none" });
  const [maps, setMaps] = useState({ display: "none" });
  const [selected, setSelected] = useState("");

  //메인리스트
  const main1 = "선물하기";
  const main2 = "채소";
  const main3 = "과일・견과・쌀";
  const main4 = "수산・해산・건어물";
  const main5 = "정육・계란";
  const main6 = "국・반찬・메인요리";
  const main7 = "샐러드・간편식";
  const main8 = "면・양념・오일";
  const main9 = "생수・음료・우유・커피";
  const main10 = "간식・과자・떡";
  const main11 = "베이커리・치즈・델리";
  const main12 = "건강식품";
  const main13 = "와인";
  const main14 = "전통주";
  const main15 = "생활용품・리빙・캠핑";
  const main16 = "스킨케어・메이크업";
  const main17 = "헤어・바디・구강";
  const main18 = "주방용품";
  const main19 = "가전제품";
  const main20 = "반려동물";
  const main21 = "베이비・키즈・완구";

  //서브리스트

  const sub1 = [
    "홍삼・즙",
    "건강식품",
    "과일・수산・정육",
    "베이커리・커피・차",
    "간편식・오일・캔류",
    "뷰티・향수・꽃",
    "리빙・생활・유아동",
  ];

  const sub2 = [
    "친환경",
    "고구마・감자・당근",
    "시금치・쌈채소・나물",
    "브로콜리・파프리카・양배추",
    "양파・대파・마늘・배추",
    "오이・호박・고추",
    "냉동・이색・간편채소",
    "콩나물・버섯",
  ];

  const sub3 = [
    "친환경",
    "제철과일",
    "국산과일",
    "수입과일",
    "간편과일",
    "냉동・건과일",
    "견과류",
    "쌀・잡곡",
  ];

  const sub4 = [
    "제철수산",
    "생선류",
    "굴비・반건류",
    "오징어・낙지・문어",
    "새우・게・랍스터",
    "해산물・조개류",
    "수산가공품",
    "김・미역・해조류",
    "건어물・다시팩",
  ];

  const sub5 = [
    "국내산 소고기",
    "수입산 소고기",
    "돼지고기",
    "계란류",
    "닭・오리고기",
    "양념육・돈까스",
    "양고기",
  ];

  const sub6 = [
    "국・탕・찌개",
    "밀키트・메인요리",
    "밑반찬",
    "김치・젓갈・장류",
    "두부・어묵・부침개",
    "베이컨・햄・통조림",
  ];

  const sub7 = [
    "샐러드・닭가슴살",
    "도시락・밥류",
    "파스타・면류",
    "떡볶이・튀김・순대",
    "피자・핫도그・만두",
    "폭립・떡갈비・안주",
    "죽・스프・카레",
    "선식・시리얼",
  ];

  const sub8 = [
    "파스타・면류",
    "식초・소스・드레싱",
    "양념・액젓・장류",
    "식용유・참기름・오일",
    "소금・설탕・향신료",
    "밀가루・가루・믹스",
  ];

  const sub9 = [
    "생수・탄산수",
    "음료・주스",
    "우유・두유・요거트",
    "커피",
    "차",
  ];

  const sub10 = [
    "과자・스낵・쿠키",
    "초콜릿・젤리・캔디",
    "떡・한과",
    "아이스크림",
  ];

  const sub11 = [
    "식빵・빵류",
    "잼・버터・스프레드",
    "케이크・파이・디저트",
    "치즈",
    "델리",
    "올리브・피클",
  ];

  const sub12 = [
    "영양제",
    "유산균",
    "홍삼・인삼・꿀",
    "건강즙・건강음료",
    "건강분말・건강환",
    "다이어트・이너뷰티",
    "유아동",
  ];

  const sub13 = ["레드와인", "화이트와인", "샴페인・스파클링"];

  const sub14 = ["막걸리・탁주", "증류주・약주・청주", "과실주・리큐르"];

  const sub15 = [
    "휴지・티슈",
    "여성・위생용품",
    "세제・청소용품",
    "화훼・인테리어소품",
    "의약외품・마스크",
    "생활잡화・문구",
    "캠핑용품",
  ];

  const sub16 = [
    "스킨・미스트・패드",
    "에센스・앰플・로션",
    "크림・오일",
    "클렌징",
    "마스크팩",
    "선케어",
    "메이크업",
    "맨즈케어",
    "뷰티소품・기기",
  ];

  const sub17 = [
    "구강・면도",
    "샴푸・컨디셔너",
    "트리트먼트・팩",
    "헤어에센스・염모",
    "바디워시・스크럽",
    "바디로션・크림",
    "핸드・립・데오",
    "향수・디퓨저",
    "헤어・바디소품",
  ];

  const sub18 = [
    "주방소모품・잡화",
    "주방・조리도구",
    "냄비・팬・솥",
    "보관용기・텀블러",
    "식기・테이블웨어",
    "컵・잔・커피도구",
  ];

  const sub19 = [
    "주방가전",
    "생활가전",
    "계절가전",
    "디지털・PC",
    "대형・설치가전",
  ];

  const sub20 = [
    "강아지 간식",
    "강아지 주식",
    "고양이 간식",
    "고양이 주식",
    "건강관리",
    "배변・위생",
    "장난감",
    "미용・외출・하우스",
  ];

  const sub21 = [
    "분유・간편이유식",
    "이유식 재료",
    "간식・음식",
    "건강식품",
    "이유・수유용품",
    "기저귀・물티슈",
    "세제・위생용품",
    "스킨・구강케어",
    "완구・잡화류",
  ];

  //메인카테고리
  const main = [
    { id: 0, mains: main1, sub: sub1 },
    { id: 1, mains: main2, sub: sub2 },
    { id: 2, mains: main3, sub: sub3 },
    { id: 3, mains: main4, sub: sub4 },
    { id: 4, mains: main5, sub: sub5 },
    { id: 5, mains: main6, sub: sub6 },
    { id: 6, mains: main7, sub: sub7 },
    { id: 7, mains: main8, sub: sub8 },
    { id: 8, mains: main9, sub: sub9 },
    { id: 9, mains: main10, sub: sub10 },
    { id: 10, mains: main11, sub: sub11 },
    { id: 11, mains: main12, sub: sub12 },
    { id: 12, mains: main13, sub: sub13 },
    { id: 13, mains: main14, sub: sub14 },
    { id: 14, mains: main15, sub: sub15 },
    { id: 15, mains: main16, sub: sub16 },
    { id: 16, mains: main17, sub: sub17 },
    { id: 17, mains: main18, sub: sub18 },
    { id: 18, mains: main19, sub: sub19 },
    { id: 19, mains: main20, sub: sub20 },
    { id: 20, mains: main21, sub: sub21 },
  ];

  console.log(main);

  return (
    <AllHead>
      <div style={{ width: "1020px", margin: "0 auto" }}>
        <RightFlex className="headTop">
          <UlFlex>
            <CustomDepLi className="af">
              <BtnTop
                style={{ color: "rgb(95, 0, 128)" }}
                type="button"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </BtnTop>
            </CustomDepLi>
            <CustomDepLi className="af">
              <BtnTop
                type="button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </BtnTop>
            </CustomDepLi>
            <CustomDepLi style={{ position: "relative" }}>
              <BtnTop
                type="button"
                onMouseOver={(e) => {
                  setDisplays({ display: "block" });
                }}
                onMouseLeave={() => {
                  setDisplays({ display: "none" });
                }}
              >
                고객센터 <TiArrowSortedDown />
              </BtnTop>
              <CustomDepth
                style={displays}
                className="customDepth"
                onMouseEnter={() => {
                  setDisplays({ display: "block" });
                }}
                onMouseLeave={() => {
                  setDisplays({ display: "none" });
                }}
              >
                <LiSize>
                  <Link to="/" style={{ display: "block", color: "#333" }}>
                    공지사항
                  </Link>
                </LiSize>
                <LiSize>
                  <Link to="/" style={{ display: "block", color: "#333" }}>
                    자주하는 질문
                  </Link>
                </LiSize>
                <LiSize>
                  <Link to="/" style={{ display: "block", color: "#333" }}>
                    1:1 문의
                  </Link>
                </LiSize>
                <LiSize>
                  <Link to="/" style={{ display: "block", color: "#333" }}>
                    대량주문 문의
                  </Link>
                </LiSize>
              </CustomDepth>
            </CustomDepLi>
          </UlFlex>
        </RightFlex>
        <div style={{ marginTop: "20px" }}>
          <LogoFlex>
            <InnerLogo>
              <H1Height onClick={() => navigate("/")}>
                <img src={logo} alt="메인로고"></img>
              </H1Height>
              <UlStyle>
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "rgb(95, 0, 128)",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    마켓컬리
                  </Link>
                </li>
              </UlStyle>
            </InnerLogo>

            <RelDiv>
              <InputSearch type="text" placeholder="검색어를 입력해주세요" />
              <SearchBtn>
                <FiSearch
                  style={{
                    fontSize: "22px",
                    color: "rgb(95,0,128)",
                  }}
                />
              </SearchBtn>
            </RelDiv>
            <div>
              <FlexIcon>
                <li
                  style={{ position: "relative" }}
                  onMouseEnter={() => {
                    setMaps({ display: "block" });
                  }}
                  onMouseLeave={() => {
                    setMaps({ display: "none" });
                  }}
                >
                  <MapStyle aria-label="지도" />
                  <AbsolDiv
                    style={maps}
                    onMouseEnter={() => {
                      setMaps({ display: "block" });
                    }}
                    onMouseLeave={() => {
                      setMaps({ display: "none" });
                    }}
                  >
                    <p>
                      <InnerSpan>배송지를 등록</InnerSpan>하고
                      <br />
                      구매 가능한 상품을 확인하세요!
                    </p>
                    <InBtnBox>
                      <InnerBtn onClick={() => navigate("/login")}>
                        로그인
                      </InnerBtn>
                      <InnerBtn2>주소 검색</InnerBtn2>
                    </InBtnBox>
                  </AbsolDiv>
                </li>
                <li>
                  <HeartStyle />
                </li>
                <li>
                  <CartStyle />
                </li>
              </FlexIcon>
            </div>
          </LogoFlex>
        </div>
        <div style={{ padding: "15px 0" }}>
          <div>
            <ThirdFlex>
              <div>
                <CateDiv>
                  <div>
                    <SpanSide></SpanSide>
                    <SpanSide></SpanSide>
                    <SpanSide></SpanSide>
                  </div>
                  <CateTitle>카테고리</CateTitle>
                </CateDiv>
              </div>
              <MainCate>
                <li>
                  <Link
                    to="/"
                    className="maincate"
                    style={{ color: "#333", fontWeight: "500" }}
                  >
                    신상품
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="maincate"
                    style={{ color: "#333", fontWeight: "500" }}
                  >
                    베스트
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="maincate"
                    style={{ color: "#333", fontWeight: "500" }}
                  >
                    알뜰쇼핑
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="maincate"
                    style={{ color: "#333", fontWeight: "500" }}
                  >
                    특가/혜택
                  </Link>
                </li>
              </MainCate>
              <div>
                <Deliever href="#n">
                  <InnerSpan>샛별・낮</InnerSpan> 배송안내
                </Deliever>
              </div>
            </ThirdFlex>
            <FormSub>
              <ul>
                {/* eslint-disable-next-line array-callback-return */}
                {main.map((item) => {
                  return (
                    <li key={item.id}>
                      <p>
                        <span></span>
                        {item.mains}
                      </p>
                      <ul className="depth">
                        <li>
                          <p>{item.sub}</p>
                        </li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </FormSub>
          </div>
        </div>
      </div>
    </AllHead>
  );
};

export default Header;

const AllHead = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 10px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.07);
`;

const RightFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomDepth = styled.ul`
  background: #fff;
  padding: 10px;
  border: 2px solid #000;
  position: absolute;
  top: 22px;
  right: 0;
  width: 120px;
  border: 1px solid rgb(153, 153, 153);
  z-index: 2;
`;

const CustomDepLi = styled.li`
  ::after {
    content: "|";
    display: inline-block;
    margin: 0 10px;
    font-size: 13px;
    position: relative;
    color: rgb(153, 153, 153);
    bottom: 2px;
  }
  :last-child::after {
    display: none;
  }
`;

const BtnTop = styled.button`
  color: #333;
  font-size: 12px;
  font-weight: 600;
`;

const UlFlex = styled.ul`
  display: flex;
  align-items: center;
`;

const LiSize = styled.li`
  font-size: 12px;
  margin-bottom: 3px;
  :last-child {
    margin-bottom: 0;
  }
`;

const LogoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InnerLogo = styled.div`
  display: flex;
  align-items: center;
`;

const H1Height = styled.h1`
  height: 42px;
`;

const UlStyle = styled.ul`
  margin-left: 25px;
`;

const RelDiv = styled.div`
  position: relative;
  right: 100px;
`;

const InputSearch = styled.input`
  border-radius: 7px;
  border: 1px solid rgb(95, 0, 128);
  width: 400px;
  height: 48px;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: 15px;
  outline: 0;
  ::placeholder {
    color: #222;
    font-weight: 400;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  height: 22px;
`;

const MapStyle = styled.button`
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");
  height: 36px;
  width: 36px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzVmMDA4MCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K");
  }
`;

const AbsolDiv = styled.div`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #999;
  z-index: 22;
  background: #fff;
`;

const InnerSpan = styled.span`
  color: rgb(95, 0, 128);
`;

const InBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
`;

const InnerBtn = styled.button`
  width: 90px;
  font-weight: 600;
  color: rgb(95, 0, 128);
  height: 35px;
  line-height: 33px;
  border: 1px solid rgb(95, 0, 128);
  border-radius: 3px;
`;

const InnerBtn2 = styled.button`
  background: rgb(95, 0, 128);
  border-radius: 3px;
  line-height: 33px;
  height: 35px;
  color: #fff;
  width: 100%;
  font-weight: 600;
`;

const FlexIcon = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const HeartStyle = styled.button`
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  :hover {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjNWYwMDgwIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==");
  }
`;

const CartStyle = styled.button`
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  :hover {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzVmMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==");
  }
`;

const CateDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SpanSide = styled.span`
  width: 17px;
  background: #333;
  height: 2px;
  margin-bottom: 4px;
  display: block;
  :last-child {
    margin-bottom: 0;
  }
`;

const CateTitle = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 500;
`;

const ThirdFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainCate = styled.ul`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const Deliever = styled.a`
  color: #666;
  display: inline-block;
  height: 32px;
  padding: 7px 10px;
  font-size: 13px;
  border-radius: 30px;
  border: 1px solid #eee;
  line-height: 15px;
  box-sizing: border-box;
`;

const FormSub = styled.form``;
