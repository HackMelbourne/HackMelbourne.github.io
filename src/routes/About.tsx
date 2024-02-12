import TeamComponent from '../features/TeamComponent/TeamComponent';
import { FaFacebook, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaGlobe, FaGamepad } from 'react-icons/fa';
import TitleHero from '../features/TitleHero/TitleHero';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const pageInfo = {
    title: 'About Us',
    description: `Throughout the year, HackMelbourne offers many opportunities for both complete beginners and seasoned veterans to display their teamwork, coding and leadership skills.`,
  };

  const teamsData = [
    {
      teamName: 'Executive Team',
      description: 'These guys are the big bosses and pull all the strings behind the scenes organising stuff',
      bgColor: 'rgba(231,52,41,0.05)',
      borderColor: 'rgba(231,52,41,.5)',
      members: [
        {
          name: 'Eric Lang',
          role: 'President',
          about: `I am Viet, weigh 70kg and like eating. Also play my game`,
          imageUrl: './img/team/2024/hm-eric-l.jpg',
          links: [
            { url: 'https://www.linkedin.com/in/eric-lang-71b7ab237/', icon: FaLinkedin },
            { url: 'https://whosthefaker.ericlang.online', icon: FaGamepad },
          ],
        },
        {
          name: 'Tyana Tsai',
          role: 'Secretary',
          about: 'Peanut butter',
          imageUrl: './img/team/2024/hm-tyana-t.jpg',
          links: [{ url: 'https://linkedin.com/in/tyanatsai', icon: FaLinkedin }],
        },
        {
          name: 'Lachlan Lam',
          role: 'Treasurer',
          about: 'Plays Volleyball and tilts people by never watching Haikyu',
          imageUrl: './img/team/2024/hm-lachlan-l.jpg',
          links: [],
        },
      ],
    },
    {
      teamName: 'Website Team',
      description: "Like we made this entire website and isn't that cool?",
      bgColor: 'rgba(42,122,243,0.05)',
      borderColor: 'rgba(42,122,243,50%)',
      members: [
        {
          name: 'Liang Heng',
          role: 'Director',
          about: `Hi 👋 I like traveling pls sponsor me`,
          imageUrl: './img/team/2024/hm-leo-h.jpg',
          links: [
            { url: 'https://www.linkedin.com/in/itsliangheng/', icon: FaLinkedin },
            { url: 'https://www.liangh.me/', icon: FaGlobe },
          ],
        },
        {
          name: 'Abhijeet Kumar',
          role: 'Officer',
          about: `Just google Abhijeet1520`,
          imageUrl: './img/team/2024/hm-abhijeet-k.jpg',
          links: [
            { url: 'https://www.linkedin.com/in/abhijeet1520/', icon: FaLinkedin },
            { url: 'https://www.abhi1520.com/', icon: FaGlobe },
          ],
        },
        {
          name: 'Victor Yoshida',
          role: 'Officer',
          about: `[object Object]`,
          imageUrl: './img/team/2024/hm-victor.jpg',
          links: [{ url: 'https://www.linkedin.com/in/victoryoshida02/', icon: FaLinkedin }],
        },
        {
          name: 'Natalie',
          role: 'Officer',
          about: `I am a comp sci major and take good care of my hygiene`,
          imageUrl: './img/team/2024/hm-natalie-l.jpg',
          links: [{ url: 'https://www.linkedin.com/in/natalie-l-a66272275/', icon: FaLinkedin }],
        },
      ],
    },
    {
      teamName: 'Education Team',
      description: 'These guys are making sure you know whats happening during our big events and hackathons',
      bgColor: 'rgba(64,243,42,0.05)',
      borderColor: 'rgba(64,243,42,50%)',
      members: [
        {
          name: 'Edbert Liu',
          role: 'Officer',
          about: "I'm loud and obnoxious, I like music that rhymes",
          imageUrl: './img/team/2024/hm-edbert-l.jpg',
          links: [],
        },
        {
          name: 'Dhruv',
          role: 'Officer',
          about: 'Sleep deprived, first year student, loves football and video games.',
          imageUrl: './img/team/2024/hm-dhruv-c.jpg',
          links: [
            { url: 'https://www.linkedin.com/in/dhruv-chaturvedi-6b1137292', icon: FaLinkedin },
            { url: 'mailto:dhruvajayc@student.unimelb.edu.au', icon: FaEnvelope },
          ],
        },
      ],
    },
    {
      teamName: 'Marketing Team',
      description: 'If your here the marketing team is doing a great job',
      bgColor: 'rgba(64,243,42,0.05)',
      borderColor: 'rgba(64,243,42,50%)',
      members: [
        {
          name: 'Jerrilyn Looi',
          role: 'Director',
          about: "Hi, I'm Jerri! I do coding and love music!",
          imageUrl: './img/team/2024/hm-jerrilyn-l.jpg',
          links: [{ url: 'https://www.linkedin.com/in/jerrilynlooi2003', icon: FaLinkedin }],
        },
        {
          name: 'Loren wilson',
          role: 'Officer',
          about: 'I’m a UX and Graphic Design student at the University of Melbourne.',
          imageUrl: './img/team/2024/hm-loren-wilson.jpeg',
          links: [{ url: 'www.linkedin.com/in/loren-wilson003', icon: FaLinkedin }],
        },
      ],
    },
    {
      teamName: 'Logistics Team',
      description: 'These guys make the hackathons and make sure everything goes well.',
      bgColor: 'rgba(64,243,42,0.05)',
      borderColor: 'rgba(64,243,42,50%)',
      members: [
        {
          name: 'Demetrius Elchinou Gobardja',
          role: 'Director',
          about: 'Majors in Data science. Enjoys dogs. Owns 6',
          imageUrl: './img/team/2024/hm-el-c.jpeg',
          links: [{ url: 'https://www.instagram.com/elchinou_/', icon: FaInstagram }],
        },
        {
          name: 'Kenneth Lim',
          role: 'Officer',
          about: 'Always striving to learn and improve... and addicted to TFT',
          imageUrl: './img/team/2024/hm-kenneth-l.jpg',
          links: [{ url: 'https://www.instagram.com/ken._lim/', icon: FaInstagram }],
        },
      ],
    },
    {
      teamName: 'Student Engagment Team',
      description:
        'These people manage the social events and are also in charge of the recruitment process so be nice to them :)',
      bgColor: 'rgba(64,243,42,0.05)',
      borderColor: 'rgba(64,243,42,50%)',
      members: [
        {
          name: 'Jessica Le',
          role: 'Director',
          about: 'CS student who loves animated animals',
          imageUrl: './img/team/2024/hm-jessica-l.png',
          links: [{ url: 'https://www.linkedin.com/in/jessica-le-79265927b', icon: FaLinkedin }],
        },
        {
          name: 'Ashley Zhang',
          role: 'Officer',
          about: 'I’m Ash! Final year Computing & Software Systems Student',
          imageUrl: './img/team/2024/hm-ash.jpeg',
          links: [],
        },
        {
          name: 'Taj Dhillon',
          role: 'Officer',
          about: 'hi i will dye my hair every colour of the rainbow maybe',
          imageUrl: './img/team/2024/hm-tajvir-d.jpeg',
          links: [],
        },
      ],
    },
    {
      teamName: 'Sponsorships Team',
      description: 'These people get us funding so that everything else is possible',
      bgColor: 'rgba(64,243,42,0.05)',
      borderColor: 'rgba(64,243,42,50%)',
      members: [
        {
          name: 'Barry Meng',
          role: 'Director',
          about: 'Hello, I’m a penguin that does things like surf the interweb',
          imageUrl: './img/team/2024/hm-barry-m.jpeg',
          links: [{ url: 'https://www.instagram.com/bazzacipher/', icon: FaInstagram }],
        },
      ],
    },
  ];

  // Animations
  const scrollRef = useRef(null);

  let { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  let y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  let opacityValue = useTransform(scrollYProgress, [0, 0.7], ['100%', '0%']);
  let scaleValue = useTransform(scrollYProgress, [0, 0.8], ['1', '0.9']);

  return (
    <div>
      <motion.section ref={scrollRef} style={{ y, opacity: opacityValue, scale: scaleValue }}>
        <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description}></TitleHero>
      </motion.section>

      <section className="z-10 relative md:pt-12">
        {teamsData.map((team, index) => (
          <TeamComponent key={index} {...team} />
        ))}
      </section>
    </div>
  );
};

export default About;
