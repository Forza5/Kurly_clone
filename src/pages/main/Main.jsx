import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate("/footer")}>
        이동
      </button>
    </div>
  );
};

export default Main;
