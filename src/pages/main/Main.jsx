import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header";
import Layout from "../../common/Layout";
import PostCard from "../../common/PostCard";
import MainSlide from "../slide/MainSlide";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import inequality from "../img/inequality.svg";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Header />
      <MainSlide />
      <Layout>
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
        <Footer />
      </Layout>
    </>
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
