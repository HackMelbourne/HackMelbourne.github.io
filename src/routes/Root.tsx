// Component Imports
import HeroBanner from '../features/LandingHero/LandingHero';
import DescriptionBoxes from '../features/DescriptionBoxes/DescriptionBoxes';
import BannerStandard from '../features/BannerStandard/BannerStandard';
import JoinTheTeam from '../features/JoinTheTeam/JoinTheTeam';

// Event Image Imports
import DecodEdImage from '../assets/images/DecodED-2022/DecodED.png';
import HackiethonImage from '../assets/images/Hackiethon-2022/Hackiethon2.png';
import MelbHackImage from '../assets/images/MelbourneHack-2023/MelbourneHack.png';

// Hoodie Imports
import HoodieBack from '../assets/images/Hoodie-2023/HM_Hoodie_Back.png';

function Root() {
  const hero = {
    clubname: ['HACK', 'MELB'],
    year: '2023',
    button: 'Buy Hoodies',
  };

  // Temp event values
  const events = [
    {
      title: 'Hackiethon',
      description:
        'Our rookie hackathon is tailor-made for those with little experience in hackathons, but are keen to get involved! Unlike our main hackathon, this will be held virtually and will provide valuable insights into the experience of competing in such events, and how to maximise your chances of success.',
      image: HackiethonImage,
    },
    {
      title: 'Melbourne Hack',
      description: `The main hackathon seeks to bring together students from across the state for a weekend of intense hacking. Scheduled for Semester 1, this annual event will provide you with the opportunity to collaborate with talented individuals, meet representatives from industry-leading companies, develop your technical skills and win amazing prizes!`,
      image: MelbHackImage,
    },
    {
      title: 'DecodED',
      description:
        "Our engaging education program is a 2-4 week course perfect for those with little to no experience in software development. Commencing in Semester 2 2022, the program will cover a variety of technologies that will exponentially improve your programming capabilities. With the rookie hackathon strategically scheduled at the conclusion of the program, you'll have the chance to put your new-found skills to the test and experience the excitement of a hackathon.",
      image: DecodEdImage,
    },
  ];

  const hoodie = {
    img: HoodieBack,
    title: 'HackMelbourne 2023 Exclusive Hoodie',
    desc: 'Remember the amazing year of 2023 and our achievements.',
    button: 'See details',
    link: 'https://www.google.com.au',
  };

  const jointeam = {
    title: ['Join the ', 'Hack', 'Melbourne team for 2024'],
    desc: ['We make an impact on our future and learn some', 'more skills along the way!'],
    button: 'Apply Now',
  };

  return (
    <div className="w-screen max-w-full pt-28">
      <HeroBanner clubname={hero.clubname} year={hero.year} button={hero.button} />
      <DescriptionBoxes events={events} />
      <BannerStandard
        img={hoodie.img}
        title={hoodie.title}
        desc={hoodie.desc}
        button={hoodie.button}
        link={hoodie.link}
      />
      <JoinTheTeam title={jointeam.title} desc={jointeam.desc} button={jointeam.button} />
    </div>
  );
}

export default Root;
