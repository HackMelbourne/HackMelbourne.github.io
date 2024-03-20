import { motion } from "framer-motion";
import DynamicLink from "../../components/DynamicLink/DynamicLink";

import dateFormat from "dateformat";

import { CalendarItemProps } from "./CalendarItem.model";

const CalendarItem = ({ index, title, image, link, description, date }: CalendarItemProps) => {
  return (
    <div className="flex justify-center h-full items-start">
      <div className="flex flex-col w-64  items-center" key={index}>
        <img
          className="border-red-600 h-64 object-cover"
          src={image}
          onClick={() => window.open(link, "_blank", "noreferrer")}
        />
        <div className="min-h-[40%] max-h-[40%] w-11/12 border px-3 py-4 flex flex-col justify-between gap-1">
          <p className="text-xs">{dateFormat(date, "fullDate")}</p>
          <h4 className="text-xl font-bold">{title.toUpperCase()}</h4>
          <p className="text-xs">{description}</p>
          <DynamicLink link={link} className="mt-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center px-4 py-3 rounded-md text-xs w-fit bg-yellow-600/20 border-yellow-500 border">
              Learn More
            </motion.div>
          </DynamicLink>
        </div>
      </div>
    </div>
  );
};

export default CalendarItem;
