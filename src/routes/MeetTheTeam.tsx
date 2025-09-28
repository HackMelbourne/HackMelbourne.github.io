import { TeamProps } from "../features/TeamComponent/TeamComponent.model";
import TeamComponent from "../features/TeamComponent/TeamComponent";
import {
  FaFacebook,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaGamepad
} from "react-icons/fa";
import TitleHero from "../features/TitleHero/TitleHero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getMeetTheTeam } from "../services/meetTeamServices";
import CircularProgress from "@mui/material/CircularProgress";

const MeetTheTeam = () => {
  const pageInfo = {
    title: "About Us",
    description: `HackMelbourne is a student club based in Melbourne, dedicated to bringing technology education to everyone! We run a variety of events throughout the year, including hackathons, workshops, and social events. Our goal is to create a welcoming and inclusive environment for all students, regardless of their background or experience level.`,
  };

  const teamsDataTemplate = [
    {
      teamName: "Executive Team",
      description: "These guys are the big bosses and pull all the strings behind the scenes organising stuff",
      bgColor: "rgba(231,52,41,0.05)",
      borderColor: "rgba(231,52,41,.5)",
      members: [],
    },
    {
      teamName: "Website Team",
      description: "Like we made this entire website and isn't that cool?",
      bgColor: "rgba(42,122,243,0.05)",
      borderColor: "rgba(42,122,243,50%)",
      members: [],
    },
    {
      teamName: "Education Team",
      description: "These guys are making sure you know whats happening during our big events and hackathons",
      bgColor: "rgba(64,243,42,0.05)",
      borderColor: "rgba(64,243,42,50%)",
      members: [],
    },
    {
      teamName: "Marketing Team",
      description: "If you're here, the marketing team is doing a great job",
      bgColor: "rgba(231,52,41,0.05)",
      borderColor: "rgba(231,52,41,.5)",
      members: [],
    },
    {
      teamName: "Logistics Team",
      description: "These guys make the hackathons and make sure everything goes well.",
      bgColor: "rgba(42,122,243,0.05)",
      borderColor: "rgba(42,122,243,50%)",
      members: [],
    },
    {
      teamName: "Student Engagement Team",
      description:
        "These people manage the social events and are also in charge of the recruitment process so be nice to them :)",
      bgColor: "rgba(64,243,42,0.05)",
      borderColor: "rgba(64,243,42,50%)",
      members: [],
    },
    {
      teamName: "Sponsorships Team",
      description: "These people get us funding so that everything else is possible",
      bgColor: "rgba(231,52,41,0.05)",
      borderColor: "rgba(231,52,41,.5)",
      members: [],
    },
  ];

  const [teamsData, setTeamsData] = useState<TeamProps[]>(teamsDataTemplate);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getMeetTheTeam().then((result) => {
       setTeamsData(teamsData.map((team) => {
         const teamMembers = result.filter(member => member.teamName === team.teamName);
         const updatedTeamMembers = teamMembers.map(member => {
            // Create "Link" object with member url and assign correct icon
            const updatedLinks = member.socialLinks.map((link: string) => ({url: link, icon: getIconForLink(link)}));
            return { ...member, links: updatedLinks };
         })
         // Sort so that Directors are displayed first
        .sort((a,b)=>{
          if (a.role == "Director" && b.role !== "Director" || a.role == "President"){
            return -1;
          }
          if (a.role !== "Director" && b.role == "Director"){
            return 1;
          }
          else{
            return 0;
          }
        });
        return { ...team, members: updatedTeamMembers };
       }));
       setIsLoading(false);
    });
   }, []);
   
  // Animations
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.7], ["100%", "0%"]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.8], ["1", "0.9"]);

  return (
    <div>
      <motion.section ref={scrollRef} style={{ y, opacity: opacityValue, scale: scaleValue }}>
        <TitleHero pageTitle={pageInfo.title} pageDescription={pageInfo.description}></TitleHero>
      </motion.section>

      <section className="z-10 relative md:pt-12">
      {isLoading ? (
        <div className="w-full flex justify-center mt-6">
          <CircularProgress color="inherit"/>
        </div>
        ) : (
          <>
            {teamsData.map((team, index) => (
              <TeamComponent key={index} {...team} />
            ))}
          </>
        )}
      </section>
    </div>
  );
};

function getIconForLink(link: string) {
  if (link.includes('facebook.com')) {
    return FaFacebook;
  } 
  else if (link.includes('instagram.com')) {
    return FaInstagram;
  } 
  else if (link.includes('linkedin.com')) {
    return FaLinkedin;
  } 
  else if (link.includes('twitter.com')) {
    return FaTwitter;
  }
  else if (link.includes('whosthefaker.ericlang.online')){
    return FaGamepad; // President's game
  }
  else if (link.includes('mailto:')){
    return FaEnvelope;
  }
  else {
    return FaGlobe; 
 }
}
 

export default MeetTheTeam;
