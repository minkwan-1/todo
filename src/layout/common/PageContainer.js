import React from "react";
import { styled } from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Content = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  flex-grow: 1;
`;

const PageContainer = ({ children, scrollClick }) => {
  return (
    <>
      <Header scrollClick={scrollClick} />
      <Content>{children}</Content>
      <Footer scrollClick={scrollClick} />
    </>
  );
};

export default PageContainer;
