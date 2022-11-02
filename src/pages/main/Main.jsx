import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header";
import Layout from "../../common/Layout";
import PostCard from "../../common/PostCard";
import MainSlide from "../slide/MainSlide";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Header />
      <MainSlide />
      <Layout>
        <div>이상품 어때요?</div>
        <PostCard number={1} />
      </Layout>
    </>
  );
};

export default Main;
