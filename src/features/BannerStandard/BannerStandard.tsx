import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import HMButton from '../../assets/button/HMButton';

interface BannerInfo {
  img: string;
  title: string;
  desc: string;
  button: string;
  link: string;
}

function BannerStandard({ img, title, desc, button, link }: BannerInfo) {
  // Animation Settings
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i * 30,
    }),
    show: {
      opacity: 1,
      x: -0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="flex w-3/4 min-w-[200px] max-w-[440px] md:w-4/5 md:min-w-[825px] md:max-w-[1100px] md:h-[505px]
        flex-col md:flex-row-reverse md:justify-between items-center gap-2.5 md:gap-0 m-auto"
      variants={container}
      viewport={{ amount: 0.8, once: true }}
      initial="hidden"
      whileInView="show">
      <motion.div className="md:w-[440px] md:h-[505px] shrink-0 self-stretch" variants={item} custom={1}>
        <img src={img} />
      </motion.div>

      <div className="flex flex-col items-center md:items-start gap-5 self-stretch md:self-auto">
        <motion.div variants={item} custom={-1}>
          <p
            id="hoodie-title"
            className="self-stretch md:self-auto text-center md:text-left text-4xl md:text-5xl font-bold">
            {title}
          </p>
        </motion.div>

        <motion.div id="hoodie-desc" className="md:w-3/4" variants={item} custom={-1}>
          <p className="self-stretch md:self-auto text-center md:text-left text-base font-medium">{desc}</p>
        </motion.div>

        <motion.div variants={item} custom={-1}>
          <Link to={link} id="hoodie-button">
            <HMButton text={button} color="secondary" style="border"></HMButton>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BannerStandard;
