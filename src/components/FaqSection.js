import React, { useState } from "react";
import styled from "styled-components";
import { StyledSection } from "../styles";
import Toggle from "./toggle";
// This detects layout changes and animates them
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>Faq</h2>
      <AnimateSharedLayout>
        {/* Question, This is a re-useable component, see "toggle.js" */}
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </Toggle>
        {/* Question, This is a re-useable component, see "toggle.js" */}
        <Toggle title="Another Question">
          <div className="answer">
            <p>Different Answer</p>
          </div>
        </Toggle>
        {/* Question, This is a re-useable component, see "toggle.js" */}
        <Toggle title="The Last Question">
          <div className="answer">
            <p>Last Answer</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(StyledSection)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 1rem 0;
    border-bottom: 5px solid #fff;
    cursor: pointer;
    .questionTitle {
      display: flex;
      justify-content: space-between;
    }
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 1rem;
    }
  }
`;

export default FaqSection;
