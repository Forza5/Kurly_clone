import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/footer")}
      >
        footer이동
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/signup")}
      >
        회원가입 이동
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/login")}
      >
        로그인 이동
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/signup")}
      >
        이동2
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/header")}
      >
        헤더
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/cart")}
      >
        장바구니
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/mainslider")}
      >
        슬라이드
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/cart")}
      >
        장바구니
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/postcard")}
      >
        포스트카드
      </button>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/modalbasic")}
      >
        모달베이직
      </button>{" "}
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/detail")}
      >
        디테일페이지
      </button>{" "}
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => navigate("/review")}
      >
        리뷰
      </button>{" "}
    </div>
  );
};

export default Main;
