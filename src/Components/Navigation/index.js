import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: antiquewhite;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledLink data-testid="homeLink" to="/">
        Home
      </StyledLink>
      <StyledLink data-testid="loginLink" to="/login">
        login
      </StyledLink>
    </Nav>
  );
};

export default Navigation;
