import React from "react";
import styled, { css } from "styled-components";
import logo from "../../img/logo.jpg";
export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogoSection>
        <StyledLogo src={logo} alt="fitness market" />
        <h2>
          <Title>FITNESS</Title>
          <Title color="blue">M4RKET</Title>
        </h2>
      </StyledLogoSection>
    </StyledNavbar>
  );
};

const StyledLogo = styled.img`
  width: 100px;
  border-radius: 100px;
`;

const StyledLogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Title = styled.span`
  ${(props) => {
    switch (props.$color) {
      case "blue":
        return css`
          background-color: black;
          color: blue;
        `;
      default:
        return css`
          background-color: white;
          color: WHITE;
        `;
    }
  }}
`;
