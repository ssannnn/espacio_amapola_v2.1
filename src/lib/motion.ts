/** Fade-up entrance for sections */
export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/** Slide-down for the navbar on load */
export const navSlide = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5, delay: 0.2 },
};
