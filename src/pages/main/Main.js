import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { Navbar } from "../../components/Navbar";

export const Main = () => {
  return (
    <StyledContainer>
      <Navbar />
      <Menu />
    </StyledContainer>
  );
};

const MainSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
