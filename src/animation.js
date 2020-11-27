export const pageAnimation = {
  hidden: {
    opacity: 0,
    rotation: 0.06,
    y: 300,
  },
  show: {
    opacity: 1,
    rotation: 0.06,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    rotation: 0.06,
    y: 300,
    transition: {
      duration: 0.2,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeIn",
    },
  },
};
