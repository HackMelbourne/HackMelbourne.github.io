import { color, motion } from "framer-motion";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { hexToRGBA } from "../../services/hexToRGBA";

import dateFormat from "dateformat";

import { CalendarItemProps } from "./CalendarItem.model";
import { useEffect, useRef } from "react";

const CalendarItem = ({ index, title, image, link, description, date, color, venue }: CalendarItemProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current != null) {
      bgRef.current.style.backgroundColor = hexToRGBA(color, "0.1");
      bgRef.current.style.borderColor = `#${color}`;
    }
  }, []);

  return (
    <div className="flex justify-center h-full items-start w-full">
      <div className="flex w-full h-full flex-col items-center" key={index}>
        <img
          className="rounded border border-white w-full aspect-square object-cover"
          src={image}
          onClick={() => window.open(link, "_blank", "noreferrer")}
        />
        <div
          ref={bgRef}
          className="h-fill flex-grow w-11/12 border rounded-t-none rounded border-t-0 p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs">{dateFormat(date, "fullDate")}</p>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="">{description}</p>
          </div>

          <div className="flex flex-col mb-4">
            <p className="text-sm text-neutral-300">Location:</p>
            <p>{venue}</p>
          </div>
          <DynamicLink link={link} className="mt-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center px-6 py-4 rounded-md w-fit bg-yellow-600/20 border-yellow-500 border font-semibold">
              Learn More
            </motion.div>
          </DynamicLink>
        </div>
      </div>
    </div>
  );
};

export default CalendarItem;
