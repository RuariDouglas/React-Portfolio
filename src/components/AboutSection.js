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
const AboutSection = () => {
  return (
    <StyledSection>
      {/* DESCRIPTION SECTION */}
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>I'm a Front-End Developer</h2>
          </Hide>
          <Hide>
            <h2>
              loooking <span>for</span>
            </h2>
          </Hide>
          <Hide>
            <h2>a job.</h2>
          </Hide>
        </div>
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
