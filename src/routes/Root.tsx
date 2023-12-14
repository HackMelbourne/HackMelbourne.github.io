import React from 'react';

// Component Imports
import HeroBanner from '../components/Home/HeroBanner';
import DescriptionBoxes from '../components/Home/DescriptionBoxes';
import BannerStandard from '../components/Home/BannerStandard';
import JoinTheTeam from '../components/Home/JoinTheTeam';

function Root() {
  const hero = {
    firstname: 'HACK',
    lastname: 'MELB',
    year: '2023',
    action: 'Buy Hoodies',
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
    title_start: 'Join the ',
    first_name: 'Hack',
    last_name: 'Melbourne',
    title_end: 'team for 2024',
    desc_start: 'Be make an impact on our future and learn some',
    desc_end: 'more skills along the way!',
    action: 'Apply Now',
  }

  return (
    <div className="w-screen max-w-full pt-28">
      <HeroBanner 
        firstname={hero.firstname}
        lastname={hero.lastname}
        year={hero.year}
        action={hero.action}
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
        title_start={jointeam.title_start}
        first_name={jointeam.first_name}
        last_name={jointeam.last_name}
        title_end={jointeam.title_end}
        desc_start={jointeam.desc_start}
        desc_end={jointeam.desc_end}
        action={jointeam.action}
      />
    </div>
  );
}

export default Root;
