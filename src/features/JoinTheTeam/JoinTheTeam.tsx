import '../../styles/gradients.css';
import { motion } from 'framer-motion';
import HMButton from '../../components/Button/HMButton';
import { Link } from 'react-router-dom';

interface JoinTheTeam {
  title: string[];
  desc: string[];
  button: string;
}

const JoinTheTeam = ({ title, desc, button }: JoinTheTeam) => {
  // Animation settings
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="join-team-gradient-border md:border-[1px] md:border-transparent flex flex-col min-h-[40vh] rounded-[20px] md:min-h-[60vh] max-w-[1100px] w-[100%] md:w-[80%] m-auto mt-40 items-center justify-center gap-3 md:gap-6"
      variants={container}
      viewport={{ amount: 0.8, once: true }}
      initial="hidden"
      whileInView="show">
      <motion.div className="text-center text-2xl md:text-5xl font-bold text-white max-w-2xl px-2" variants={item}>
        {title[0]} <span className="text-yellow-600">{title[1]}</span>
        {title[2]}
      </motion.div>
      <motion.div className="text-sm text-center px-2" variants={item}>
        {desc[0]}
        <br />
        {desc[1]}
      </motion.div>

      <motion.div variants={item}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_Cu4yD6Du6LWXD4itRBALJ0elsou0LN56xKPveT3HvrlBmw/viewform"
          target="_blank"
          rel="noopener noreferrer">
          <HMButton text={button} color="primary" style="border"></HMButton>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default JoinTheTeam;
