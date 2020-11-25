import React from "react";
// We have to import images in react then reference the variable in the "src" to display it.
import home1 from "../img/home1.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
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
    </StyledAbout>
  );
};

// STYLED COMPONENTS
const StyledAbout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
`;

const StyledImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
