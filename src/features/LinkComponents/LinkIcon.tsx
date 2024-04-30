import { LinkItemProps } from "./LinkItemProps";
import { IconType } from "react-icons";
import { FaInstagram, FaFacebook, FaDiscord, FaLinkedin, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { motion } from 'framer-motion';

const LinkIcon = ({ title, link } : LinkItemProps) => {

  const icons: {[key: string]: IconType} = {
    'Instagram': FaInstagram, 
    'Facebook': FaFacebook, 
    'Discord': FaDiscord, 
    'Linkedin': FaLinkedin,
    'Tiktok': FaTiktok,
    'Youtube': FaYoutube,
    'Twitter': FaTwitter,
  }

  const Icon = icons[title];

  return (
    <>
      <DynamicLink link={link}>
        <motion.button
          whileHover={{ scale: 1.1 }}
        >
        <Icon className="h-8 w-8" />
        </motion.button>
      </DynamicLink>
    </>
  )
}

export default LinkIcon;