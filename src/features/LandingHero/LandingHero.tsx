import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './LandingHero.css';

const HeroBanner = () => {
  return (
    <div className="max-w-[1100px] grid grid-cols-1 m-auto items-center">
      <div className="z-10 col-start-1 row-start-1 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: '20rem', textIndent: '20rem' }}
          whileInView={{ opacity: 1, letterSpacing: '0px', textIndent: '0px' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'anticipate', type: 'tween' }}
          viewport={{ once: true }}
          className="text-center font-black text-7xl md:text-9xl">
          <div>HACK</div>
          <div>MELB</div>
          <div>2023</div>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          href="https://www.google.com"
          className="mt-4 px-6 py-3 rounded-md bg-blue-600/20 border border-blue-500 font-semibold">
          Buy Hoodies
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, letterSpacing: '20rem', textIndent: '20rem' }}
        whileInView={{ opacity: 1, letterSpacing: '0px', textIndent: '0px' }}
        transition={{ duration: 1.2, ease: 'anticipate', type: 'tween' }}
        viewport={{ once: true }}
        className="col-start-1 row-start-1 text-center font-black text-9xl md:text-[15rem] text-outline text-transparent select-none">
        <div>HACK</div>
        <div>MELB</div>
        <div>2023</div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
