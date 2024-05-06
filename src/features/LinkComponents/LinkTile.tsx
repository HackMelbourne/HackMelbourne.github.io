import { LinkItemProps } from "./LinkItemProps";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { motion } from 'framer-motion';

const LinkTile = ({ title, link } : LinkItemProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="w-full px-4 py-4 rounded-xl bg-neutral-800 font-medium text-lg"
    >
      <DynamicLink link={link}>
        {title}
      </DynamicLink>
    </motion.button>
  )
}

export default LinkTile;