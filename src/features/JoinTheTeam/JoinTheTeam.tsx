import '../../styles/gradients.css';
import { motion } from 'framer-motion';

const JoinTheTeam = () => {
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
      className="join-team-gradient-border flex flex-col min-h-[40vh] rounded-sm md:rounded-[20px] md:min-h-[60vh] max-w-[1100px] w-[100%] md:w-[80%] m-auto items-center justify-center gap-3 md:gap-6"
      variants={container}
      viewport={{ amount: 0.8, once: true }}
      initial="hidden"
      whileInView="show">
      <motion.div className="text-center text-2xl md:text-5xl font-bold text-white max-w-2xl" variants={item}>
        Join the <span className="text-primary">Hack</span>Melbourne team for 2024
      </motion.div>
      <motion.div className="text-sm text-center" variants={item}>
        Be make an impact on our future and learn some
        <br />
        more skills along the way!
      </motion.div>
      {/* Copied button styling from BannerStandard for now */}
      <motion.div
        className="text-sm flex w-[120px] h-[45px] py-2.5 px-[15px] justify-center items-center gap-2.5
          rounded-[5px] bg-primary bg-opacity-40 border-primary border-[1px]"
        variants={item}>
        Apply Now
      </motion.div>
    </motion.div>
  );
};

export default JoinTheTeam;
