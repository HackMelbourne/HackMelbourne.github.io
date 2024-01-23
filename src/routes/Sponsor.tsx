import SponsorTitle from "../features/Sponsors/SponsorTitle";
import PlatinumSponsor from "../features/Sponsors/PlatinumSponsor";
import GoldSponsor from "../features/Sponsors/GoldSponsor";
import SilverSponsor from "../features/Sponsors/SilverSponsors";
import CommunitySponsor from "../features/Sponsors/CommunitySponsor";

const Sponsor = () => {
  const sponsorTitles = [
    {title: 'Platinum Supporters'},
    {title: 'Gold Supporters'},
    {title: 'Silver Supporters'},
    {title: 'Community Supporters'},
  ]
  
  const platinumInfo = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
      sponsor: 'Burger King',
      desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
      button: 'Visit website',
      website: 'https://www.google.com/',
    },

    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
      sponsor: 'King 2',
      desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
      button: 'Visit website',
      website: 'https://www.google.com/',
    },
  ]

  const goldInfo = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
      sponsor: 'Burger King',
      desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce.',
      button: 'Visit website',
      website: 'https://www.google.com/',
    },

    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
      sponsor: 'King 2',
      desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
      button: 'Visit website',
      website: 'https://www.google.com/',
    },
  ]

  const silverInfo = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
      desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce.',
    },

    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
      desc: 'A brief introduction. Burger king whopper woohoo i love whoppers in foot lettuce. Here is another line because 3 lines look nice.',
    },
  ]

  const communityInfo = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    },

    {
      image: 'https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QE8DL8L~Sl2RWKN0qVqamFT04EEngweh7JelISA4jHq4cn4tbZ0~4kfbaP4ny2HskXsagXV~waCFv373SI1mOyOF4SspQB3hArke5pD6Xc2ilacYu2XzqdL7sNmbHknv~jCHgGd5M95sP0nei07d~YTs9V1Q6Uur~zzLclve~s3EpttKzVU6giohnVIAN6OKg1Zfzdzc0WRUhEfZG~M3FRDJBLZ-zg94pkj98SxuNNGUXQ39PsvaBXCOeQJ6ALpfJLituHWQVOIS4bk~dTWtdlAJY0CNLYJN7S9mdyJTBufu9TAzO83azCHhwNKDwfGNlKX3jhFVhMzAihoRTdgljQ__',
    },
  ]
  
  return (
    <div className="w-screen max-w-full">
      <SponsorTitle title={sponsorTitles[0].title} />
      {platinumInfo.map((plat) => (
        <PlatinumSponsor {...plat} />
      ))}

      <SponsorTitle title={sponsorTitles[1].title} />
      <div className="grid auto-rows-auto m-auto mb-6">
        {goldInfo.map((gold) => (
          <GoldSponsor {...gold} />
        ))}
      </div>

      <SponsorTitle title={sponsorTitles[2].title} />
      <div className="grid auto-rows-auto m-auto mb-6">
        {silverInfo.map((silver) => (
          <SilverSponsor {...silver} />
        ))}
      </div>

      <SponsorTitle title={sponsorTitles[3].title} />
      <div className="grid auto-rows-auto m-auto mb-6">
        {communityInfo.map((comm) => (
          <CommunitySponsor {...comm} />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
