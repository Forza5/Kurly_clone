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
    </div>
  );
};

export default Main;
