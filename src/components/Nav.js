import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Our work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "60%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "60%" : "0%" }}
          />
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
      border-bottom: 3px solid #1b1b1b;
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 0;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0;
  position: absolute;
  bottom: 0;
`;

export default Nav;
