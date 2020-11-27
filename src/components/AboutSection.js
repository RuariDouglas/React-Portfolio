import React from "react";
// We have to import images in react then reference the variable in the "src" to display it.
import home1 from "../img/home1.png";
// STYLES
import {
  StyledSection,
  StyledDescription,
  StyledImageContainer,
  Hide,
} from "../styles";
//FRAMER MOTION
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <StyledSection>
      {/* DESCRIPTION SECTION */}
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2>
              I'm a <span>Front-End Developer</span>
            </motion.h2>
          </Hide>
          <motion.h2>
            <h2>loooking for a job.</h2>
          </motion.h2>
        </motion.div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <button>Contact Me</button>
      </StyledDescription>

      {/* IMAGE ON RIGHT */}
      <StyledImageContainer>
        <img src={home1} alt="Home" />
      </StyledImageContainer>
    </StyledSection>
  );
};

export default AboutSection;
