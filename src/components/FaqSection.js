import React from "react";
import styled from "styled-components";
import { StyledSection } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>Faq</h2>
      {/* Question */}
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>Another question</h4>
        <div className="answer">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>The last question</h4>
        <div className="answer">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
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
    padding: 3rem 0;
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 1rem;
    }
    &::after {
      content: "";
      margin: 2rem 0;
      display: block;
      background-color: #fff;
      height: 5px;
      width: 100%;
    }
  }
`;

export default FaqSection;
