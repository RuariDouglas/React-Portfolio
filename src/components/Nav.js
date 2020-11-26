import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Ruari Douglas
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
