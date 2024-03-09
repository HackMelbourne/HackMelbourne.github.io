import React from 'react';
import { motion } from 'framer-motion';

import DynamicLink from '../../components/DynamicLink/DynamicLink';
import HMButton from '../../components/Button/HMButton';

interface EventItemProps {
  name: string;
  date: string;
  brief: string;
  description: string;
  bgImage: string;
  frontImage: string;
  link: string;
  altBgImage: string;
  altFrontImage: string;
}

const EventItem = ({ name, date, brief, description, bgImage, frontImage, link, altBgImage, altFrontImage }: EventItemProps) => {
  let linkText: string;

  if (!link) {
    linkText = 'Coming soon';
  } else {
    linkText = 'Learn more';
  }

  return (
    <div className="rounded-[10px] mx-auto w-4/5 max-w-[800px] my-20 min-h-[200px]">
      {/* small screen heading */}
      <h2 className="text-4xl font-bold mb-2 md:hidden block text-center">{name}</h2>
      <div
        role="img"
        aria-label={altBgImage}
        className="md:ml-0 ml-6 h-[30vw] bg-cover bg-center rounded-[10px]"
        style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="flex">
        <div className="w-[60%] md:w-[40%] md:p-4">
          <img
            className="h-[120%] relative -top-[20%] rounded-[10px] object-cover w-full"
            src={frontImage}
            alt={altFrontImage}
          />
        </div>
        <motion.div
          className="md:p-4 p-2 pr-0 flex flex-col justify-between w-[40%] md:w-[60%] "
          viewport={{ amount: 'all', once: true }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}>
          <div>
            <h2 className="text-4xl font-bold mb-2 hidden md:block">{name}</h2>
            <div className="flex flex-col md:flex-row gap-2 mb-2 md:text-xs sm:text-xl text-base">
              <p className="font-bold">{date}</p>
              <p className="text-neutral-400">{brief}</p>
            </div>
            <p className="text-sm overflow-y-hidden min-h-[40%] mb-2 hidden md:block">{description}</p>
          </div>
          <div className="hidden md:block">
            <HMButton text={linkText} color="primary" style="disabled" link={link}></HMButton>
          </div>
        </motion.div>
      </div>
      {/* small screen items */}
      <motion.div
        className="p-4 flex flex-col items-center justify-between w-[100%]"
        viewport={{ amount: 'all', once: true }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}>
        <p className="md:hidden block text-sm overflow-y-hidden min-h-[40%] mb-2">{description}</p>
        <div className=" md:hidden">
          <HMButton text={linkText} color="primary" link={link}></HMButton>
        </div>
      </motion.div>
    </div>
  );
};

export default EventItem;
