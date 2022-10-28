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
              <H1Height>
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
              <CateDiv>
                <div>
                  <SpanSide></SpanSide>
                  <SpanSide></SpanSide>
                  <SpanSide></SpanSide>
                </div>
                <CateTitle>카테고리</CateTitle>
              </CateDiv>
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
