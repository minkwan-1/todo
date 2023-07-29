import React from "react";
import { styled } from "styled-components";

const FooterStyle = styled.div`
  background-color: #f2f2f2;
  display: flex;
  height: 20vh;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto;
`;

const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

const ScrollButton = styled.p`
  font-weight: bolder;
`;

const Footer = ({ scrollClick }) => {
  return (
    <FooterStyle>
      {/* Text */}
      <FooterTextContainer>
        <p>My task</p>
        <p>Copyright © 2023 All rights reserved</p>
        <p>Powered By SITE123 - Create your own website</p>
      </FooterTextContainer>
      {/* Button */}
      <ScrollButtonContainer>
        <ScrollButton onClick={() => scrollClick(0)}>Home</ScrollButton>
        <ScrollButton onClick={() => scrollClick(1)}>AddTask</ScrollButton>
        <ScrollButton onClick={() => scrollClick(2)}>RecentTodo</ScrollButton>
        <ScrollButton onClick={() => scrollClick(3)}>MyTodo</ScrollButton>
      </ScrollButtonContainer>
    </FooterStyle>
  );
};

export default Footer;
