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
  width: 100%;
  min-height: 10vh;
  display: flex;
  margin: auto;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #1b1b1b;

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
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 0;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
