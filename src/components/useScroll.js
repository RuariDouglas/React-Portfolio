//useInView is the plugin that detects when something scrolls into view to allow for animation at specific points
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

/* This is the best way to create animated components. We create a function and export it for use in any component. Remember, we need to return [element, controls] */

export const useScroll = () => {
  // To use "useAnimation" we need to declare the two following variables...
  // 1. controls will be our variable to access the useAnimation function.
  const controls = useAnimation();

  /* 2. "element & view".
  - "Element" relates to the element where the trigger begins. We set this on the
  - "View" returns the result of wither it's in view or not, it will return a boolean value.
  - "threshold" determines the delay on the effect, think of it as 'offset' */
  const [element, view] = useInView({ threshold: 0.2 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
