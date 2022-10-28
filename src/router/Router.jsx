import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer";
import Main from "../pages/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
