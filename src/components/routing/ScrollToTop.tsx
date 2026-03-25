import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [pathname, shouldReduceMotion]);

  return null;
};
