import { color, motion } from "framer-motion";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { hexToRGBA } from "../../services/hexToRGBA";

import dateFormat from "dateformat";

import { CalendarItemProps } from "./CalendarItem.model";
import { useEffect, useRef } from "react";

const CalendarItem = ({ index, title, image, link, description, date, color }: CalendarItemProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current != null) {
      bgRef.current.style.backgroundColor = hexToRGBA(color, "0.1");
      bgRef.current.style.borderColor = `#${color}`;
    }
  }, []);

  return (
    <div className="flex justify-center h-full items-start">
      <div className="flex h-full flex-col w-64 items-center" key={index}>
        <img
          className={`rounded border border-white h-64 object-cover`}
          src={image}
          onClick={() => window.open(link, "_blank", "noreferrer")}
        />
        <div ref={bgRef} className="h-fill flex-grow w-11/12 border rounded border-t-0 px-3 py-4 flex flex-col gap-2">
          <p className="text-xs">{dateFormat(date, "fullDate")}</p>
          <h4 className="text-xl font-bold">{title.toUpperCase()}</h4>
          <p className="text-xs mb-4">{description}</p>
          <DynamicLink link={link} className="mt-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center px-4 py-3 rounded-md text-xs w-fit bg-yellow-600/20 border-yellow-500 border font-semibold">
              Learn More
            </motion.div>
          </DynamicLink>
        </div>
      </div>
    </div>
  );
};

export default CalendarItem;
