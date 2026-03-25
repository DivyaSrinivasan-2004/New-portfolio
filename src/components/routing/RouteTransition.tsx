import { motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export const RouteTransition = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={location.pathname}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Outlet />
    </motion.div>
  );
};
