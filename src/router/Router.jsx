import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import SignUp from "../pages/users/SignUp";
import Login from "../pages/users/Login";
import Cart from "../pages/cart/Cart";
import PostCard from "../common/PostCard";
import ModalBasic from "../common/ModalBasic";
import Detail from "../pages/detail/Detail";
import Review from "../pages/detail/Review";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/postcard" element={<PostCard />} />
        <Route path="/modalbasic" element={<ModalBasic />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
