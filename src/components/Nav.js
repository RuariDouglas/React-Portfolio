import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Ruari Douglas
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
  }
  #logo {
    font-size: 2rem;
    letter-spacing: 2px;
    font-family: "DM Serif Display", serif;
  }
  ul {
    li {
      padding: 1rem 3rem;
      position: relative;
    }
  }
`;

export default Nav;