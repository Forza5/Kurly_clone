import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../common/Layout";
import PostCard from "../../common/PostCard";
import MainSlide from "../slide/MainSlide";
import styled from "styled-components";
import { Link } from "react-router-dom";
import inequality from "../img/inequality.svg";

const Main = () => {
  const navigate = useNavigate();
  const moveScroll = (e) => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <Layout>
      <MainSlide />
      <Lists>
        <Titles>이 상품 어때요?</Titles>
        <PostCard number={1} />
      </Lists>
      <Lists>
        <Link to="/">
          <BannerImg
            src="https://product-image.kurly.com/banner/random-band/pc/img/b5603827-1127-4f27-9a6c-eadc846940b8.jpg"
            alt="배너"
          />
        </Link>
      </Lists>
      <Lists>
        <Titles>
          놓치면 후회할 가격 <InequalImg src={inequality} alt="부등호" />
        </Titles>
        <PostCard number={2} />
      </Lists>
      <Lists>
        <Titles>
          지금 가장 핫한 상품 <InequalImg src={inequality} alt="부등호" />
        </Titles>
        <PostCard number={3} />
      </Lists>
      <Lists>
        <Titles>
          Kurly Only 추천 상품 <InequalImg src={inequality} alt="부등호" />
        </Titles>
        <PostCard number={4} />
      </Lists>
      <Lists>
        <Titles>
          50대 고객의 구매 TOP50 <InequalImg src={inequality} alt="부등호" />
        </Titles>
        <PostCard number={5} />
      </Lists>
      <TopMove id="moves" onClick={moveScroll}></TopMove>
    </Layout>
  );
};

export default Main;

const Lists = styled.div`
  padding: 40px 0;
  width: 1050px;
  margin: 0 auto;
`;

const Titles = styled.p`
  color: rgb(51, 51, 51);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.26px;
  font-weight: 500;
  margin: 35px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
`;

const InequalImg = styled.img`
  position: relative;
  top: 2px;
`;

const TopMove = styled.div`
  position: fixed;
  width: 58px;
  height: 58px;
  bottom: 15px;
  right: 31px;
  background: #fff;
  border: rgb(51, 51, 51);
  background: url(data:image/png;base64,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)
    50% 50% / 58px 58px no-repeat;
  opacity: 1;
  cursor: pointer;
`;
