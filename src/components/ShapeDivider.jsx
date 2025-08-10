import { motion } from 'framer-motion';
import React from 'react';

const ShapeDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 -mb-[1px]"
    >
      <svg
        className="relative block w-[136%] h-[150px] rotate-180"
        style={{ transform: 'scaleX(-1)' }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#000000" />
      </svg>
    </motion.div>
  );
};

export default ShapeDivider;
