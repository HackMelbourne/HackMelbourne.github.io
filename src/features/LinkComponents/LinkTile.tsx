import { LinkItemProps } from "./LinkItemProps";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { motion } from 'framer-motion';

const LinkTile = ({ title, link } : LinkItemProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-screen sm:w-7/12 px-6 py-4 rounded-xl bg-[#262626] font-medium text-lg"
    >
      <DynamicLink link={link}>
        {title}
      </DynamicLink>
    </motion.button>
  )
}

export default LinkTile;