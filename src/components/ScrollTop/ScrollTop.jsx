import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.div
      className="scroll-top"
      initial={{ opacity: 0, x: 1000 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 500,
      }}
    >
      <Link to="header" smooth={true}>
        <BsArrowUp size={32} fill="#fff" />
      </Link>
    </motion.div>
  );
};

export default ScrollTop;
