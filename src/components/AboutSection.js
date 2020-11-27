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
import { titleAnim } from "../animation";
import { fade } from "../animation";
import { photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledSection>
      {/* DESCRIPTION SECTION */}
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm a <span>Front-End Developer</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>loooking for a job.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </StyledDescription>

      {/* IMAGE ON RIGHT */}
      <StyledImageContainer>
        <motion.img variants={photoAnim} src={home1} alt="Home" />
      </StyledImageContainer>
      <Wave />
    </StyledSection>
  );
};

export default AboutSection;
