import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import "../pages/css/reset.css";
import "../pages/css/font.css";
import isms from "../pages/img/logo_isms.svg";
import privacy from "../pages/img/logo_privacy.svg";
import toss from "../pages/img/logo_tosspayments.svg";
import woori from "../pages/img/logo_wooriBank.svg";

const Footer = () => {
  return (
    <FootBox>
      <Bot1Flex>
        <div className="left_text">
          <TitleFlex>
            <H3Text>고객행복센터</H3Text>
            <SpanText>365일 오전 7시 - 오후 7시</SpanText>
          </TitleFlex>
          <div>
            <H3Text2>1644-1107</H3Text2>
          </div>
          <UlFirst>
            <LiFirst>
              <Link to="/" style={{ display: "block", color: "#333" }}>
                카카오톡 문의
              </Link>
            </LiFirst>
            <LiFirst>
              <Link to="/" style={{ display: "block", color: "#333" }}>
                1:1 문의
              </Link>
            </LiFirst>
            <LiFirst>
              <Link to="/" style={{ display: "block", color: "#333" }}>
                대량주문 문의
              </Link>
            </LiFirst>
          </UlFirst>
          <UlSecond>
            <li>
              비회원 문의 :{" "}
              <MailTo href="mailto:help@kurlycorp.com">
                help@kurlycorp.com
              </MailTo>
            </li>
            <li>
              비회원 대량주문 문의 :{" "}
              <MailTo href="mailto:kurlygift@kurlycorp.com">
                kurlygift@kurlycorp.com
              </MailTo>
            </li>
          </UlSecond>
        </div>
        <div className="right_text">
          <div>
            <UlThird>
              <LiThird>
                <LiAThird
                  href="https://www.kurly.com/shop/introduce/about_kurly.php"
                  target={"_blank"}
                >
                  컬리소개
                </LiAThird>
              </LiThird>
              <LiThird>
                <LiAThird
                  href="https://www.youtube.com/embed/WEep7BcboMQ?rel=0&showinfo=0&wmode=opaque&enablejsapi=1"
                  target={"_blank"}
                >
                  컬리소개영상
                </LiAThird>
              </LiThird>
              <LiThird>
                <LiAThird
                  href="https://marketkurly.recruiter.co.kr/appsite/company/index"
                  target={"_blank"}
                >
                  인재채용
                </LiAThird>
              </LiThird>
              <LiThird>
                <LiAThird
                  href="https://www.kurly.com/user-terms/agreement"
                  target={"_blank"}
                >
                  이용약관
                </LiAThird>
              </LiThird>
              <LiThird>
                <LiAThird
                  href="https://www.kurly.com/user-terms/privacy-policy"
                  target={"_blank"}
                >
                  개인정보처리방침
                </LiAThird>
              </LiThird>
              <LiThird>
                <LiAThird
                  href="https://www.kurly.com/user-guide"
                  target={"_blank"}
                >
                  이용안내
                </LiAThird>
              </LiThird>
            </UlThird>
          </div>
          <CompanyInfo>
            <LiFourth>
              <span className="af">법인명 &#40;상호&#41; : 주식회사 컬리</span>
              <span>
                사업자등록번호 : 261-81-23567{" "}
                <MoveColor
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no="
                  target={"_blank"}
                >
                  사업자정보확인
                </MoveColor>
              </span>
            </LiFourth>
            <LiFourth>
              <span className="af">통신판매업 : 제 2018-서울강남-01646 호</span>
              <span>개인정보보호책임자 : 이원준</span>
            </LiFourth>
            <LiFourth>
              <span className="af">
                주소 : 서울특별시 강남구 테헤란로 133, 18층&#40;역삼동&#41;
              </span>
              <span>대표이사 : 김슬아</span>
            </LiFourth>
            <LiFourth>
              <span className="af">
                입점문의 :{" "}
                <MoveColor
                  href="https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform"
                  target={"_blank"}
                >
                  입점문의하기
                </MoveColor>
              </span>
              <span>
                제휴문의 :{" "}
                <MoveColor
                  href="mailto:business@kurlycorp.com"
                  target={"_blank"}
                >
                  business@kurlycorp.com
                </MoveColor>
              </span>
            </LiFourth>
            <LiFourth>
              <span>
                채용문의 :{" "}
                <MoveColor
                  href="mailto:recruit@kurlycorp.com"
                  target={"_blank"}
                >
                  recruit@kurlycorp.com
                </MoveColor>
              </span>
            </LiFourth>
            <LiFourth>
              <span>팩스 : 070 - 7500 - 6098</span>
            </LiFourth>
          </CompanyInfo>
          <div>
            <UlFifth>
              <LiFifth>
                <ASize
                  href="https://www.instagram.com/marketkurly/"
                  target={"_blank"}
                >
                  <ImgSize
                    src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
                    alt="인스타그램"
                  />
                </ASize>
              </LiFifth>
              <LiFifth>
                <ASize
                  href="https://www.facebook.com/marketkurly"
                  target={"_blank"}
                >
                  <ImgSize
                    src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
                    alt="페이스북"
                  />
                </ASize>
              </LiFifth>
              <LiFifth>
                <ASize
                  href="https://blog.naver.com/marketkurly"
                  target={"_blank"}
                >
                  <ImgSize
                    src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                    alt="네이버블로그"
                  />
                </ASize>
              </LiFifth>
              <LiFifth>
                <ASize
                  href="https://m.post.naver.com/marketkurly"
                  target={"_blank"}
                >
                  <ImgSize
                    src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
                    alt="네이버포스트"
                  />
                </ASize>
              </LiFifth>
              <LiFifth>
                <ASize
                  href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
                  target={"_blank"}
                >
                  <ImgSize
                    src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
                    alt="유튜브"
                  />
                </ASize>
              </LiFifth>
            </UlFifth>
          </div>
        </div>
      </Bot1Flex>
      <LogoBox>
        <UlSixth>
          <LiSixth>
            <img src={isms} alt="isms" />
            <MarginDiv>
              <PText>
                &#91;인증범위&#93;
                <br />
                &#40;심사받지 않은 물리적 인프라 제외&#41;
              </PText>
              <PText>
                &#91;유효기간&#93;
                <span>2022.01.19 ~ 2025.01.18</span>
              </PText>
            </MarginDiv>
          </LiSixth>
          <LiSixth>
            <img src={privacy} alt="ePRIVACY PLUS" />
            <MarginDiv>
              <PText>
                개인정보보호 우수 웹사이트 · <br />
                개인정보처리시스템 인증 &#40;ePRIVACY PLUS&#41;
              </PText>
            </MarginDiv>
          </LiSixth>
          <LiSixth>
            <img src={toss} alt="토스" />
            <MarginDiv>
              <PText>
                토스페이먼츠 구매안전&#40;에스크로&#41;
                <br />
                서비스를 이용하실 수 있습니다.
              </PText>
            </MarginDiv>
          </LiSixth>
          <LiSixth>
            <img src={woori} alt="우리은행" />
            <MarginDiv>
              <PText>
                고객님이 현금으로 결제한 금액에 대해 우리은행과
                <br />
                채무지급보증 계약을 체결하여 안전거래를 보장하고
                <br />
                있습니다.
              </PText>
            </MarginDiv>
          </LiSixth>
        </UlSixth>
      </LogoBox>
      <BotLastBox>
        <p>
          마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
          판매하는 마켓플레이스&#40;오픈마켓&#41; 상품이 포함되어 있습니다.
          <br />
          마켓플레이스&#40;오픈마켓&#41; 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
        </p>
        <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
      </BotLastBox>
    </FootBox>
  );
};

export default Footer;

const FootBox = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`;

const Bot1Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 50px 0;
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
`;

const TitleFlex = styled.div`
  display: flex;
  align-items: center;
`;

const H3Text = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const H3Text2 = styled.h3`
  font-size: 28px;
  line-height: 40px;
`;

const SpanText = styled.span`
  font-size: 16px;
  font-weight: normal;
  margin-left: 8px;
`;

const UlFirst = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LiFirst = styled.li`
  width: 140px;
  height: 40px;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
`;

const UlSecond = styled.ul`
  font-size: 12px;
  color: rgb(153, 153, 153);
  margin-top: 38px;
`;

const MailTo = styled.a`
  color: rgb(153, 153, 153);
`;

const UlThird = styled.ul`
  display: flex;
  align-items: center;
  gap: 17px;
`;

const LiThird = styled.li`
  font-size: 14px;
  :nth-child(5) {
    font-weight: 500;
  }
`;

const LiAThird = styled.a`
  color: #333;
`;

const CompanyInfo = styled.div`
  margin: 30px 0;
`;

const LiFourth = styled.li`
  height: 20px;
  > span {
    color: rgb(153, 153, 153);
    font-size: 12px;
  }
  > span.af:first-child::after {
    content: "|";
    display: inline-block;
    font-size: 10px;
    margin: 0 5px;
    position: relative;
    top: -1px;
    color: rgb(153, 153, 153);
  }
`;

const MoveColor = styled.a`
  color: #5f0080;
`;

const UlFifth = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LiFifth = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ASize = styled.a`
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50%;
`;

const ImgSize = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 35px 0;
`;

const UlSixth = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const LiSixth = styled.li`
  display: flex;
`;

const MarginDiv = styled.div`
  margin-left: 13px;
`;

const PText = styled.p`
  color: rgb(153, 153, 153);
  font-size: 10px;
`;

const BotLastBox = styled.div`
  padding: 20px 0 30px;
  font-size: 10px;
  background: #f7f7f7;
  color: #999;
  text-align: center;
`;
