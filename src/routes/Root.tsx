// Component Imports
import HeroBanner from "../features/LandingHero/LandingHero";
import DescriptionBoxes from "../features/DescriptionBoxes/DescriptionBoxes";
import BannerStandard from "../features/BannerStandard/BannerStandard";
import CallToAction from "../features/CallToAction/CallToAction";

// Event Image Imports
import DecodEdImage from "../assets/images/DecodED-2022/DecodED.png";
import HackiethonImage from "../assets/images/Hackiethon-2022/Hackiethon2.png";
import MelbHackImage from "../assets/images/MelbourneHack-2023/MelbourneHack.png";

// Hoodie Imports
import HoodieBack from "../assets/images/Hoodie-2023/HM_Hoodie_Back.png";

// Constants
import { UMSU_LINK } from "../constants";

function Root() {
  const hero = {
    clubname: ["HACK", "MELB"],
    year: "2024",
    button: [
      {
        name: "Hackiethon",
        link: "",
      },
      {
        name: "Join Club",
        link: UMSU_LINK,
      },
    ],
  };

  // Temp event values
  const events = [
    {
      title: "DecodED",
      description:
        "A workshop style education program tailored towards those with limited experience in software development. Aswell as Hackiethon taking place right after the conclusion of DecodED to allow attendees to apply their new knowledge!",
      image: DecodEdImage,
      altImage: "Students learning at DecodED hosted by HackMelbourne",
    },
    {
      title: "Hackiethon",
      description:
        "Our rookie hackathon is tailor-made for inexperienced but eager individuals! \n Unlike our main hackathon, it comes with valuable insights into the experience of competing and finding success in such events.",
      image: HackiethonImage,
      altImage: "Students competing at Hackiethon by HackMelbourne.",
    },
    {
      title: "Melbourne Hack",
      description: `Our main competition, brings together students from across the state for a weekend of intense hacking. Scheduled for Semester 2, this annual event provides the opportunity to collaborate with talented peers, connect with industry-leading companies, develop strong technical skills, and win amazing prizes!`,
      image: MelbHackImage,
      altImage: "Students competing at DecodED hosted by HackMelbourne",
    },
  ];

  const hoodie = {
    img: HoodieBack,
    title: "HackMelbourne 2023 Exclusive Hoodie",
    desc: "Remember the amazing year of 2023 and our achievements.",
    button: "See details",
    link: "",
  };

  const jointeam = {
    title: ["Join the ", "Hack", "Melbourne team for 2024"],
    desc: ["We make an impact on our future and learn some", "more skills along the way!"],
    button: "Apply Now",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc_Cu4yD6Du6LWXD4itRBALJ0elsou0LN56xKPveT3HvrlBmw/viewform",
  };

  return (
    <div className="w-screen max-w-full pt-28">
      <HeroBanner clubname={hero.clubname} year={hero.year} buttons={hero.button} />
      <DescriptionBoxes events={events} />
      <BannerStandard
        img={hoodie.img}
        title={hoodie.title}
        desc={hoodie.desc}
        button={hoodie.button}
        link={hoodie.link}
      />
      <CallToAction title={jointeam.title} desc={jointeam.desc} button={jointeam.button} link={jointeam.link} />
    </div>
  );
}

export default Root;
