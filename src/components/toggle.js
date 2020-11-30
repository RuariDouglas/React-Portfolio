import { motion } from "framer-motion";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

/* This is a reusable component. We are using this in the Faq section. Because we need to toggle between states the same way for each FAQ, we can set up a reuseable component that holds the logic inside. We can use the 'children' parameter to control all children of the toggle element we have created here.   */

/* All tags in here need to be motion... as we have AnimateSharedLayout active on this section.
This detects changes to any element wrapped in the <AnimateSharedLayout> tag (See FaqSection.js.)

To get this working, or stop framer motion adding some weird animaion effect, just add 'layout' to the component which is being affected.*/

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.div layout className="questionTitle">
        <motion.h4>{title}</motion.h4>
        <FontAwesomeIcon
          className="toggleSwitch"
          size="2x"
          icon={toggle ? faAngleUp : faAngleDown}
        />
      </motion.div>

      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
