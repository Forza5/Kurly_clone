import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Layouts>{children}</Layouts>;
};

export default Layout;

const Layouts = styled.div`
  width: 1050px;
  margin: 0 auto;
`;
