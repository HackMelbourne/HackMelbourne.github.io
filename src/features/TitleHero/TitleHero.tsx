import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface PageHeader {
  pageTitle: string;
  pageDescription: string;
}

const TitleHero = ({ pageTitle, pageDescription }: PageHeader) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-1 grid-rows-1 items-center md:mt-10 relative overflow-clip">
      {/* Background */}
      <div
        className="col-start-1 row-start-1 absolute -z-10 stroke-width text-9xl font-black md:text-[256px] whitespace-nowrap left-1/2"
        style={{
          color: "transparent",
          WebkitTextStrokeColor: "#767676",
        }}
        ref={ref}>
        <motion.div
          className=" relative -left-1/2"
          initial={{ opacity: 0, letterSpacing: "20rem", textIndent: "20rem" }}
          whileInView={{ opacity: 1, letterSpacing: "0px", textIndent: "0px" }}
          transition={{ delay: 0.4, duration: 0.8, ease: "anticipate", type: "tween" }}
          viewport={{ once: true }}>
          {pageTitle}
        </motion.div>
      </div>
      {/* Foreground */}
      <div className="col-start-1 row-start-1 pt-48 px-8 j">
        <div className="justify-self-center flex flex-col gap-3 md:items-center md:gap-5">
          <motion.div
            className="z-1 text-5xl font-black md:text-7xl lg:text-[96px] md:whitespace-nowrap"
            initial={{ opacity: 0, letterSpacing: "20rem", textIndent: "20rem" }}
            whileInView={{ opacity: 1, letterSpacing: "0px", textIndent: "0px" }}
            transition={{ duration: 1.2, ease: "anticipate", type: "tween" }}
            viewport={{ once: true }}>
            <h1>{pageTitle}</h1>
          </motion.div>
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}>
            <p>{pageDescription}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TitleHero;
