import React from "react";
// We have to import images in react then reference the variable in the "src" to display it.
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      {/* DESCRIPTION SECTION */}
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I'm a Front-End Developer</h2>
          </div>
          <div className="hide">
            <h2>
              loooking <span>for</span>
            </h2>
          </div>
          <div className="hide">
            <h2>a job.</h2>
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <button>Contact Me</button>
      </div>
      <div className="image-container">
        <img src={home1} alt="Home Image" />
      </div>
    </div>
  );
};

export default AboutSection;
