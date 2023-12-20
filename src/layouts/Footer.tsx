import React from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import HM_White_Transparent from '/img/HM_White_Transparent.png';

interface FooterLink {
  name: string;
  link: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterIcon {
  name: string;
  icon: IconType;
  link: string;
}

interface FooterData {
  links: FooterSection[];
  icons: FooterIcon[];
}

const Footer = ({ links, icons }: FooterData) => {
  return (
    <div className="flex justify-center">
      <footer className="w-screen max-w-[1100px] p-3 px-8 my-20 flex flex-col items-center">
        {/* Social icons */}
        <div className="flex grow flex-row md:w-1/3 w-100 mb-4 md:mb-8 justify-between">
          {icons.map((icon) => (
            <a
              key={icon.name}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon p-3"
            >
              <icon.icon className="h-7 w-7 md:h-10 md:h-10"/>
            </a>
          ))}
        </div>

        {/* Link sections */}
        <div className="flex justify-between flex-col md:flex-row">
          <div className="p-4 md:w-[42%] justify-center grid md:justify-start">
            <img title="HackMelbourne Logo" src={HM_White_Transparent} className="md:h-10 md:w-10 h-20 w-20" />
          </div>
          {links.map((section) => (
            <div key={section.title} className="flex flex-col mb-8 p-2 text-center md:text-left md:w-1/3">
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.link} className="hover:underline">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
