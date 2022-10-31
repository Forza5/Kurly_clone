import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer";
import Main from "../pages/main/Main";
import SignUp from "../pages/users/SignUp";
import Login from "../pages/users/Login";
import Header from "../common/Header";
import Cart from "../pages/cart/Cart";
import MainSlider from "../pages/slide/MainSlide";
import PostCard from "../common/PostCard";
import ModalBasic from "../common/ModalBasic";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mainslider" element={<MainSlider />} />
        <Route path="/postcard" element={<PostCard />} />
        <Route path="/modalbasic" element={<ModalBasic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
