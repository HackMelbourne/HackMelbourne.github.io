import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./TitleHero.css";

interface PageHeader {
  pageTitle: string;
  pageDescription: string;
}

const TitleHero = ({ pageTitle, pageDescription }: PageHeader) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="hero-container">
      <div className="hero-bigtext">
        {/* Background Text */}
        <motion.div
          className="hero-background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "anticipate", type: "tween" }}
          viewport={{ once: true }}
        >
          {pageTitle}
        </motion.div>

         {/* Foreground Content */}
        <motion.div
          className="hero-title"
          initial={{ opacity: 0, letterSpacing: "20rem", textIndent: "20rem" }}
          whileInView={{ opacity: 1, letterSpacing: "0px", textIndent: "0px" }}
          transition={{ duration: 1.2, ease: "anticipate", type: "tween" }}
          viewport={{ once: true }}
        >
          <h1>{pageTitle}</h1>
        </motion.div>
      </div>

      <motion.div
        className="hero-description"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p>{pageDescription}</p>
      </motion.div>
    </div>
  );
};

export default TitleHero;
