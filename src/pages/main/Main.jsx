import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate("/footer")}>
        footer이동
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        회원가입 이동
      </button>
      <button type="button" onClick={() => navigate("/login")}>
        로그인 이동
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        이동2
      </button>
      <button type="button" onClick={() => navigate("/header")}>
        헤더
      </button>
      <button type="button" onClick={() => navigate("/cart")}>
        장바구니
      </button>
      <button type="button" onClick={() => navigate("/mainslider")}>
        슬라이드
      </button>
    </div>
  );
};

export default Main;
