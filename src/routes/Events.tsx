import "../styles/Events.css";
import TitleHero from "../features/TitleHero/TitleHero";
import EventItem from "../features/EventItem/EventItem";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Event Image Imports
import DecodEdImage from "../assets/images/DecodED-2022/DecodED.jpg";
import DecodEdImage2 from "../assets/images/DecodED-2022/DecodED2.jpg";
import HackiethonImage from "../assets/images/Hackiethon-2022/Hackiethon.jpg";
import HackiethonImage2 from "../assets/images/Hackiethon-2022/Hackiethon2.jpg";
import MelbHackImage from "../assets/images/MelbourneHack-2023/MelbourneHack.jpg";
import MelbHackImage2 from "../assets/images/MelbourneHack-2023/MelbourneHack2.jpg";

const Events = () => {
  const pageInfo = {
    title: "Events",
    description: `Throughout the year, HackMelbourne offers many opportunities for both
    complete beginners and seasoned veterans to display their teamwork, coding
    and leadership skills.`,
  };
  const eventsData = [
    {
      name: "DecodED",
      date: "15/03 - 17/03",
      brief: "Free entry, educational",
      description:
        "We’re passionate about providing accessible tech education to students from all backgrounds and experiences. Our workshop style education program is tailored towards those with limited experience in software development and includes content that complements traditional Computer Science education taught at universities. With Hackiethon taking place right after the conclusion of the program, attendees will have the chance to put their new-found skills to the test! ",
      bgImage: DecodEdImage,
      frontImage: DecodEdImage2,
      altBgImage: "Students in a classroom taking part of the DecodED workshop.",
      altFrontImage: "Classroom with supplies table in front with several students attending DecodED workshop in the background.",
      link: "",
    },
    {
      name: "Hackiethon",
      date: "22/03 - 24/03",
      brief: "Free entry, begginer friendly",
      description:
        "Our rookie hackathon is tailor-made for inexperienced but eager individuals! Unlike our main hackathon, it comes with valuable insights into the experience of competing and finding success in such events.",
      bgImage: HackiethonImage2,
      frontImage: HackiethonImage,
      altBgImage: "HackMelbourne comitteee members in a lecutre hall setting up hackathon competition.",
      altFrontImage: "Students in a lecture hall viewing hackathon competition being presented.",
      link: "",
    },
    {
      name: "Melbourne Hack",
      date: "30/8 - 06/9",
      brief: "Free entry, great competition",
      description: `Melbourne Hack is a hackathon where participants use their entrepreneurial skills to build a product in 3 days. Given certain themes, participants will have to build something that solves a problem or meets a need. Then they will be able to pitch their product to a panel of judges!`,
      bgImage: MelbHackImage,
      frontImage: MelbHackImage2,
      altBgImage: "Students sitting in a lecture hall discussing amongst themselves.",
      altFrontImage: "Classroom with a teacher in the middle and several students coding.",
      link: "",
    },
  ];

  // Animations
  const scrollRef = useRef(null);

  let { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  let opacityValue = useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]);
  let scaleValue = useTransform(scrollYProgress, [0, 0.8], ["1", "0.9"]);

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
