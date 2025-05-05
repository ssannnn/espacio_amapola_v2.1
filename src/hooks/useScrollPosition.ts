import { useState, useEffect } from "react";

/**
 * Returns `true` once `window.scrollY` exceeds `threshold`.
 * Default threshold is 50px.
 */
export default function useScrollPosition(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handle = (): void => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle);
    handle(); // initialize immediately
    return (): void => window.removeEventListener("scroll", handle);
  }, [threshold]);

  return scrolled;
}
