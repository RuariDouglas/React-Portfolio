import styled from "styled-components";
import { motion } from "framer-motion";

/* When creating styled components, there will be times where you need to reuse elements.
In styles.js we can create components and export them to use throughout our app.

Note how we export every style variable
*/

// STYLED COMPONENTS
export const StyledSection = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 0 0 5rem 0;
    }
  }
`;

export const StyledImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
