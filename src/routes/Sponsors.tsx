import { Title } from '@mui/icons-material';
import CallToAction from '../features/CallToAction/CallToAction';
import Sponsor from '../features/Sponsors/Sponsor';
import SponsorsEmpty from '../features/SponsorsEmpty/SponsorsEmpty';
import TitleHero from '../features/TitleHero/TitleHero';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SponsorProps {
  tier: string;
  image: string;
  sponsor?: string;
  desc?: string;
  button?: string;
  website?: string;
}

const Sponsors = () => {
  const sponsorTitles = ['Platinum Supporters', 'Gold Supporters', 'Silver Supporters', 'Community Supporters'];

  const heroInfo = {
    title: 'Sponsorships',
    body: 'Throughout the year, HackMelbourne offers many opportunities for both complete beginners and seasoned veterans to display their teamwork, coding and leadership skills.',
  };

  const platinumInfo: SponsorProps[] = [
    // {
    //   tier: 'Platinum',
    //   image:
    //     'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   sponsor: 'Burger King',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
    //   button: 'Visit website',
    //   website: 'https://www.google.com/',
    // },
    // {
    //   tier: 'Platinum',
    //   image:
    //     'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   sponsor: 'King 2',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
    //   button: 'Visit website',
    //   website: 'https://www.google.com/',
    // },
  ];

  const goldInfo: SponsorProps[] = [
    // {
    //   tier: 'Gold',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   sponsor: 'Burger King',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce.',
    //   button: 'Visit website',
    //   website: 'https://www.google.com/',
    // },
    // {
    //   tier: 'Gold',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   sponsor: 'King 2',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
    //   button: 'Visit website',
    //   website: 'https://www.google.com/',
    // },
  ];

  const silverInfo: SponsorProps[] = [
    // {
    //   tier: 'Silver',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce.',
    // },
    // {
    //   tier: 'Silver',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. ',
    // },
    // {
    //   tier: 'Silver',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    //   desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce.',
    // },
  ];

  const communityInfo: SponsorProps[] = [
    // {
    //   tier: 'Community',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    // },
    // {
    //   tier: 'Community',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    // },
    // {
    //   tier: 'Community',
    //   image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    // },
  ];

  const sponsorCTA = {
    title: ['Be a', 'Hack', 'Melbourne sponsor for 2024'],
    desc: ['Join the journey: be a HackMelbourne 2024 sponsor', 'and help us spread the excitement of hackathons!'],
    button: 'Learn More',
    link: '',
  };

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
    <div className="w-screen max-w-full">
      <motion.section ref={scrollRef} style={{ y, opacity: opacityValue, scale: scaleValue }}>
        <TitleHero pageTitle={heroInfo.title} pageDescription={heroInfo.body}></TitleHero>
      </motion.section>

      {/* Platinum */}

      <section>
        <h2 className="text-4xl text-center font-extrabold mt-28 mb-9">{sponsorTitles[0]}</h2>
        {platinumInfo.length > 0 ? (
          <div className="grid grid-rows-1 gap-6 w-[350px] md:w-7/12 md:max-w-[800px] m-auto">
            {platinumInfo.map((plat) => (
              <Sponsor {...plat} />
            ))}
          </div>
        ) : (
          <SponsorsEmpty tier="platinum" button="Learn more" link="/"></SponsorsEmpty>
        )}
      </section>

      {/* Gold */}

      <section>
        <h2 className="text-4xl text-center font-extrabold mt-28 mb-9">{sponsorTitles[1]}</h2>
        {goldInfo.length > 0 ? (
          <div className="grid grid-rows-1 md:grid-cols-2 gap-5 w-[350px] md:w-11/12 md:max-w-[1020px] m-auto">
            {goldInfo.map((gold) => (
              <Sponsor {...gold} />
            ))}
          </div>
        ) : (
          <SponsorsEmpty tier="platinum" button="Learn more" link="/"></SponsorsEmpty>
        )}
      </section>

      {/* Silver */}
      <section>
        <h2 className="text-4xl text-center font-extrabold mt-28 mb-9">{sponsorTitles[2]}</h2>
        {silverInfo.length > 0 ? (
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 w-max h-max m-auto border border-white rounded-xl overflow-hidden">
            {silverInfo.map((silver) => (
              <Sponsor {...silver} />
            ))}
          </div>
        ) : (
          <SponsorsEmpty tier="platinum" button="Learn more" link="/"></SponsorsEmpty>
        )}
      </section>

      {/* Community */}
      <section>
        <h2 className="text-4xl text-center font-extrabold mt-28 mb-9">{sponsorTitles[3]}</h2>
        {communityInfo.length > 0 ? (
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 w-max m-auto border border-white rounded-xl overflow-hidden">
            {communityInfo.map((comm) => (
              <Sponsor {...comm} />
            ))}
          </div>
        ) : (
          <SponsorsEmpty tier="platinum" button="Learn more" link="/"></SponsorsEmpty>
        )}
      </section>

      <CallToAction title={sponsorCTA.title} desc={sponsorCTA.desc} button={sponsorCTA.button} link={sponsorCTA.link} />
    </div>
  );
};

export default Sponsors;