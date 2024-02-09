import TeamComponent from '../features/TeamComponent/TeamComponent';
import { FaFacebook, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import TitleHero from '../features/TitleHero/TitleHero';

const About = () => {
  const pageInfo = {
    title: 'About HackMelbourne',
    description: `Throughout the year, HackMelbourne offers many opportunities for both complete beginners and seasoned veterans to display their teamwork, coding and leadership skills.`,
  };

  const teamsData = [
    {
      teamName: 'Executive Team',
      description:
        'comprising experts in technology, business, and marketing, aims to foster innovation and collaboration, ensuring a supportive environment for learning, networking, and groundbreaking solution development.',
      bgColor: 'rgba(231,52,41,0.05)',
      borderColor: 'rgba(231,52,41,.5)',
      members: [
        {
          name: 'Eric Lang',
          role: 'President',
          about: `I am Viet, weigh 70kg and like eating. Also play my [game](https://whosthefaker.ericlang.online).`,
          imageUrl: './img/team/2024/hm-eric-l.jpg',
          links: [
            { url: 'https://www.linkedin.com/in/eric-lang-71b7ab237/', icon: FaLinkedin },
          ],
        },
        {
          name: 'Tyana Tsai',
          role: 'Secretary',
          about: 'Peanut butter',
          imageUrl: './img/team/2024/hm-tyana-t.jpg',
          links: [
            { url: 'https://linkedin.com/in/tyanatsai', icon: FaLinkedin },
          ],
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
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ',
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
          links: [
            { url: 'https://www.linkedin.com/in/victoryoshida02/', icon: FaLinkedin },
          ],
        },
        {
          name: 'Natalie',
          role: 'Officer',
          about: `I am a comp sci major and take good care of my hygiene`,
          imageUrl: './img/team/2024/hm-natalie-l.jpg',
          links: [
            { url: 'https://www.linkedin.com/in/natalie-l-a66272275/', icon: FaLinkedin },
          ],
        },
      ],
    },
    {
      teamName: 'Education Team',
      description: 'Dedicated to enhancing learning and development.',
      bgColor: 'rgba(64,243,42,0.05)',
      borderColor: 'rgba(64,243,42,50%)',
      members: [
        {
          name: 'Edbert Liu',
          role: 'Officer',
          about: "I'm loud and obnoxious, I like music that rhymes",
          imageUrl: 'https://via.placeholder.com/150',
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
  ];

  return (
    <div>
      <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description}></TitleHero>
      <section className="z-10 relative">
        {teamsData.map((team, index) => (
          <TeamComponent key={index} {...team} />
        ))}
      </section>
    </div>
  );
};

export default About;
