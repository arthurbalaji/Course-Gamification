import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  background-color: #1e3a8a;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <div>
        <Link to="/courses">Courses</Link>
        <Link to="/points">Points</Link>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
