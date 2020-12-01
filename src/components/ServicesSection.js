import React from "react";
// IMPORT ICONS
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

// STYLES
import styled from "styled-components";
// This is how we import the components from our styles.js
import {
  StyledSection,
  StyledDescription,
  StyledImageContainer,
} from "../styles";

import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    // To start animation, we must make sure ref, initial, animate properties are both input
    <Services
      ref={element}
      initial="hidden"
      animate={controls}
      variants={scrollReveal}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> code
        </h2>
        {/* CARDS SECTION */}
        <Cards>
          {/* CARD */}
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum blah blah</p>
          </Card>

          {/* CARD */}
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem Ipsum blah blah</p>
          </Card>

          {/* CARD */}
          <Card>
            <div className="icon">
              <img src={money} alt="Money" />
              <h3>Money</h3>
            </div>
            <p>Lorem Ipsum blah blah</p>
          </Card>

          {/* CARD */}
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem Ipsum blah blah</p>
          </Card>
        </Cards>
      </StyledDescription>
      <StyledImageContainer>
        <img src={home2} alt="" />
      </StyledImageContainer>
    </Services>
  );
};

/* Here we can actually manipulate a template component we created in styles.js. This can be useful if you nwant to rename the styled-component to fit with the page template. Or you want all but 1 or 2 of the same styles as the styled-component in your new component. Just add the pre-made styled-component inside a parentheses like so. */
const Services = styled(StyledSection)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    text-align: center;
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 17rem;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0.5rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
