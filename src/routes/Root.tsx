// Component Imports
import HeroBanner from '../features/LandingHero/LandingHero';
import DescriptionBoxes from '../features/DescriptionBoxes/DescriptionBoxes';
import BannerStandard from '../features/BannerStandard/BannerStandard';
import JoinTheTeam from '../features/JoinTheTeam/JoinTheTeam';

function Root() {
  const hero = {
    clubname: ['HACK', 'MELB'],
    year: '2023',
    button: 'Buy Hoodies',
  };

  // Temp event values
  const events = [
    {
      title: 'First Event Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Second Event Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Third Event Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ];

  const hoodie = {
    img: '/img/hoodie.png',
    title: 'HackMelbourne 2023 Exclusive Hoodie',
    desc: 'Remember the amazing year of 2023 and our achievements.',
    button: 'See details',
    link: 'https://www.google.com.au',
  }

  const jointeam = {
    title: ['Join the ', 'Hack', 'Melbourne', 'team for 2024'],
    desc: ['Be make an impact on our future and learn some', 'more skills along the way!'],
    button: 'Apply Now',
  }

  return (
    <div className="w-screen max-w-full pt-28">
      <HeroBanner 
        clubname={hero.clubname}
        year={hero.year}
        button={hero.button}
      />
      <DescriptionBoxes events={events} />
      <BannerStandard
        img={hoodie.img}
        title={hoodie.title}
        desc={hoodie.desc}
        button={hoodie.button}
        link={hoodie.link}
      />
      <JoinTheTeam 
        title={jointeam.title}
        desc={jointeam.desc}
        button={jointeam.button}
      />
    </div>
  );
}

export default Root;
