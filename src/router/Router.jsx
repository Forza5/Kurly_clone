import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer";
import Main from "../pages/main/Main";
import SignUp from "../pages/users/SignUp";
import Login from "../pages/users/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
