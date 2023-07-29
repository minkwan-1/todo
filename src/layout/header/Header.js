import React from "react";
import { styled } from "styled-components";

const HeaderStyle = styled.div`
  background-color: #c07848;
  width: 100%;
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const HeaderContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  height: 100%;
  padding: 0px 12px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;
const Logo = styled.img`
  width: auto;
  height: 70px;
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

const ScrollButton = styled.div`
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

const Header = ({ scrollClick }) => {
  const titleArr = ["Home", "AddTask", "RecentTodo", "MyTodo"];
  return (
    <HeaderStyle>
      {/* Logo & Button Wrapper */}
      <HeaderContentWrapper>
        {/* Logo */}
        <LogoContainer>
          <Logo />
        </LogoContainer>

        {/* Button */}
        <ScrollButtonContainer>
          {titleArr?.map((title, idx) => (
            <ScrollButton key={idx} onClick={() => scrollClick(idx)}>
              {title}
            </ScrollButton>
          ))}
        </ScrollButtonContainer>
      </HeaderContentWrapper>
    </HeaderStyle>
  );
};

export default Header;
