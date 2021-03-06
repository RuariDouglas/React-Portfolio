import React from "react";
import styled from "styled-components";

// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const Contact = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send me an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default Contact;
