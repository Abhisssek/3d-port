import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
 
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ali
          </a>
         </div>
    </div>
    </div>
  );
};

export default Navbar;
