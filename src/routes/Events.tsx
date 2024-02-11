import '../styles/Events.css';
import TitleHero from '../features/TitleHero/TitleHero';
import EventItem from '../features/EventItem/EventItem';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Event Image Imports
import DecodEdImage from '../assets/images/DecodED-2022/DecodED.png';
import DecodEdImage2 from '../assets/images/DecodED-2022/DecodED2.png';
import HackiethonImage from '../assets/images/Hackiethon-2022/Hackiethon.png';
import HackiethonImage2 from '../assets/images/Hackiethon-2022/Hackiethon2.png';
import MelbHackImage from '../assets/images/MelbourneHack-2023/MelbourneHack.png';
import MelbHackImage2 from '../assets/images/MelbourneHack-2023/MelbourneHack2.png';

const Events = () => {
  const pageInfo = {
    title: 'Events / Initiatives',
    description: `Throughout the year, HackMelbourne offers many opportunities for both
    complete beginners and seasoned veterans to display their teamwork, coding
    and leadership skills.`,
  };
  const eventsData = [
    {
      name: 'Hackiethon',
      date: 'TBD, 2024',
      brief: '(with workshops from TBD, 2024!)',
      description:
        'Our rookie hackathon is tailor-made for inexperienced but eager individuals! Unlike our main hackathon, it comes with valuable insights into the experience of competing and finding success in such events.',
      bgImage: HackiethonImage2,
      frontImage: HackiethonImage,
      link: 'https://www.google.com.au',
    },
    {
      name: 'Melbourne Hack',
      date: 'TBD, 2024',
      brief: '(with workshops from TBD, 2024!)',
      description: `Melbourne Hack, our main competition, brings together students from across the state for a weekend of intense hacking. Scheduled for Semester 1, this annual event provides the opportunity to collaborate with talented peers, connect with industry-leading companies, develop strong technical skills, and win amazing prizes!`,
      bgImage: MelbHackImage,
      frontImage: MelbHackImage2,
      link: 'https://www.google.com.au',
    },
    {
      name: 'DecodED',
      date: 'TBD, 2024',
      brief: '(with workshops from TBD, 2024!)',
      description:
        "Our engaging education program is a 2-4 week course for those with little to no experience in software development. Commencing in Semester 2, it hosts a variety of workshops aiming to improve attendees' programming capabilities. With Hackiethon taking place right after the conclusion of the program, attendees will have the chance to utilise their new-found skills to the test!",
      bgImage: DecodEdImage,
      frontImage: DecodEdImage2,
      link: 'https://www.google.com.au',
    },
  ];

  // Animations
  const scrollRef = useRef(null);

  let { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  let y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  let opacityValue = useTransform(scrollYProgress, [0, 0.8], ['100%', '0%']);
  let scaleValue = useTransform(scrollYProgress, [0, 0.8], ['1', '0.9']);

  return (
    <div className="w-screen max-w-full">
      <motion.section ref={scrollRef} style={{ y, opacity: opacityValue, scale: scaleValue }}>
        <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description} />
      </motion.section>
      <section className="z-10 relative">
        {eventsData.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </section>
    </div>
  );
};

export default Events;
