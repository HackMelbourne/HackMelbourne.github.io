import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaCalendar,
  FaLink,
  FaFlag,
  FaPersonBooth,
  FaUser,
} from "react-icons/fa";
import {
  DISCORD_LINK,
  FACEBOOK_LINK,
  LINKEDIN_LINK,
  INSTAGRAM_LINK,
  SPONSORSHIP_EMAIL,
  SECRETARY_EMAIL,
  UMSU_LINK,
  GITHUB_LINK,
} from "../constants";

// Components
import Navbar from "./Navbar";
import { NavbarPillProps } from "../features/Navbar/NavbarPillProps";
import Footer from "./Footer";

// Styles
import "../styles/layout.css";

// Pathnames here will not have a navbar
const dontShowNavbarPathnames = ["/example"];
// Pathnames here will not have a footer
const dontShowFooterPathnames = ["/example"];

const Layout = () => {
  const location = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(true);
  const [isShowFooter, setIsShowFooter] = useState(true);

  // Navbar conditional rendering
  useEffect(() => {
    console.log("useEffect!");
    const pathname = window.location.pathname;
    console.log(pathname);
    const isNavbarHidden = dontShowNavbarPathnames.some((path) => pathname.includes(path));
    const isFooterHidden = dontShowFooterPathnames.some((path) => pathname.includes(path));
    setIsShowNavbar(!isNavbarHidden);
    setIsShowFooter(!isFooterHidden);
  }, [location]);

  const homePills: NavbarPillProps[] = [];

  const aboutPills: NavbarPillProps[] = [
    {
      title: "Events",
      desc: "Our flagship Events!",
      Icon: FaFlag,
      image: "/img/temp-bg.jpg",
      link: "/about/events",
    },
    {
      title: "Meet the team",
      desc: "See our amazing team",
      Icon: FaUser,
      image: "/img/temp-bg.jpg",
      link: "/about/meettheteam",
    },
  ];

  const calenderPills: NavbarPillProps[] = [
    {
      title: "Calender",
      desc: "See what's going on!",
      Icon: FaCalendar,
      image: "/img/temp-bg.jpg",
      link: "/upcoming/calendar",
    },
    {
      title: "Links",
      desc: "Signups, events and more",
      Icon: FaLink,
      image: "/img/temp-bg.jpg",
      link: "/upcoming/links",
    },
  ];

  const sponsorPills: NavbarPillProps[] = [];

  const nav = {
    clubname: "HackMelbourne",
    logo: "/img/HM_White_Transparent.png",
    pages: ["Home", "About", "Upcoming", "Sponsors"],
    links: ["/", "/meettheteam", "/calendar", "/sponsors"],
    pills: [homePills, aboutPills, calenderPills, sponsorPills],
  };

  const footer = {
    links: [
      {
        title: "Organisation",
        links: [
          {
            name: "Join Committee",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSc_Cu4yD6Du6LWXD4itRBALJ0elsou0LN56xKPveT3HvrlBmw/viewform",
          },
          { name: "UMSU", link: UMSU_LINK },
          { name: "Contact Us", link: "mailto:${SECRETARY_EMAIL}" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", link: "/privacy" },
          { name: "Terms and Conditions", link: "/terms" },
        ],
      },
      {
        title: "Resources",
        links: [
          // { name: "Past Events", link: "#" },
          { name: "GitHub", link: GITHUB_LINK },
          // { name: "Design Guidelines", link: "#" },
          { name: "Major Events", link: "about/events" },
        ],
      },
    ],
    icons: [
      { name: "Facebook", icon: FaFacebook, link: FACEBOOK_LINK },
      { name: "Instagram", icon: FaInstagram, link: INSTAGRAM_LINK },
      { name: "Discord", icon: FaDiscord, link: DISCORD_LINK },
      { name: "LinkedIn", icon: FaLinkedin, link: LINKEDIN_LINK },
      { name: "Email", icon: FaEnvelope, link: `mailto:${SECRETARY_EMAIL}` },
    ],
  };

  return (
    <>
      <div className="w-screen max-w-full overflow-x-clip">
        {isShowNavbar ? (
          <Navbar clubname={nav.clubname} logo={nav.logo} pages={nav.pages} links={nav.links} pills={nav.pills} />
        ) : null}
        <Outlet />
        {isShowFooter ? <Footer links={footer.links} icons={footer.icons} /> : null}

        {/* Background colours */}
        <ul className="w-screen max-w-full bg-circles -z-10 overflow-x-clip">
          <li className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"></li>
          <li className="md:w-[700px] md:h-[700px] hidden md:block"></li>
          <li className="w-[700px] h-[700px] md:w-[900px] md:h-[900px]"></li>
        </ul>
      </div>
      <div className="w-screen max-w-full h-screen fixed top-0 bg-neutral-950 -z-20"></div>
    </>
  );
};

export default Layout;
