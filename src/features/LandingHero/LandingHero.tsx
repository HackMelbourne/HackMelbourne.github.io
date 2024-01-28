import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './LandingHero.css';
import HMButton from '../../components/Button/HMButton';
import { Button } from '@mui/material';
import DynamicLink from '../../components/DynamicLink/DynamicLink';

interface Hero {
  clubname: string[];
  year: string;
  buttons: Button[];
}

interface Button {
  name: string;
  link: string;
}

const HeroBanner = ({ clubname, year, buttons }: Hero) => {
  return (
    <div className="max-w-[1100px] grid grid-cols-1 m-auto items-center">
      <div className="z-10 col-start-1 row-start-1 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: '20rem', textIndent: '20rem' }}
          whileInView={{ opacity: 1, letterSpacing: '0px', textIndent: '0px' }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'anticipate', type: 'tween' }}
          viewport={{ once: true }}
          className="text-center font-black text-7xl md:text-9xl">
          <div>{clubname[0]}</div>
          <div>{clubname[1]}</div>
          <div>{year}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-8 z-50">
          {buttons.map((Button, index) => (
            <DynamicLink link={Button.link}>
              <HMButton text={Button.name} color={index == 0 ? 'primary' : 'neutral'} style="border" />
            </DynamicLink>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, letterSpacing: '20rem', textIndent: '20rem' }}
        whileInView={{ opacity: 1, letterSpacing: '0px', textIndent: '0px' }}
        transition={{ duration: 1.2, ease: 'anticipate', type: 'tween' }}
        viewport={{ once: true }}
        className="col-start-1 row-start-1 text-center font-black text-9xl md:text-[15rem] text-outline text-transparent select-none truncate">
        <div>{clubname[0]}</div>
        <div>{clubname[1]}</div>
        <div>{year}</div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
