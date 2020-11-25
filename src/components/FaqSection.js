import React from "react";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>Faq</h2>
      {/* Question */}
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Here is the topic</p>
          <p>Here's the answer</p>
        </div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>Another question</h4>
        <div className="answer">
          <p>Here is the topic</p>
          <p>Here's the answer</p>
        </div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>The last question</h4>
        <div className="answer">
          <p>Here is the topic</p>
          <p>Here's the answer</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
