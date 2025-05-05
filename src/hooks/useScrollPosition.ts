import { useState, useEffect } from "react";

/**
 * Returns `true` once `window.scrollY` exceeds `threshold`.
 * Default threshold is 50px.
 */
export default function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle);
    handle(); // initialize
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);

  return scrolled;
}
