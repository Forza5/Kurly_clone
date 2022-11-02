import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return <Layouts>{children}</Layouts>;
};

export default Layout;

const Layouts = styled.div`
  margin: 0 auto;
`;
