import { LinkItemProps } from "./LinkItemProps";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { FaInstagram, FaFacebook, FaDiscord, FaLinkedin, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

const LinkItem = ({ title, link, category }: LinkItemProps) => {
  const icons: { [key: string]: IconType } = {
    Instagram: FaInstagram,
    Facebook: FaFacebook,
    Discord: FaDiscord,
    Linkedin: FaLinkedin,
    Tiktok: FaTiktok,
    Youtube: FaYoutube,
    Twitter: FaTwitter,
  };

  if (category == "Icon") {
    const Icon = icons[title];

    return (
      <DynamicLink link={link}>
        <motion.button whileHover={{ scale: 1.1 }}>
          <Icon className="h-8 w-8" />
        </motion.button>
      </DynamicLink>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="w-full px-4 py-6 rounded-xl bg-black/20 border border-white backdrop-blur font-medium text-lg">
        <DynamicLink link={link}>{title}</DynamicLink>
      </motion.button>
    );
  }
};

export default LinkItem;
