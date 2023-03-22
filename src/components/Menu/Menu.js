import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <StyledItem>Inicio</StyledItem>
      <StyledItem>Productos</StyledItem>
      <StyledItem>Planes</StyledItem>
      <StyledItem>Contacto</StyledItem>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  list-style: none;
  display: flex;
`;
const StyledItem = styled.li`
  padding: 16px;
`;
