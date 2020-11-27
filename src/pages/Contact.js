import React from "react";
import styled from "styled-components";

// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Contact = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact</h1>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  background-color: blue;
`;

export default Contact;
