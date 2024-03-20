import CalendarItem from "../features/CalendarItem/CalendarItem";

import { useEffect, useState } from "react";
import { getEventCalendar } from "../services/eventListServices";
import { CalendarItemProps } from "../features/CalendarItem/CalendarItem.model";

const Calendar = () => {
  const [calendar, setCalendar] = useState<CalendarItemProps[]>([]);

  useEffect(() => {
    getEventCalendar().then((result) => {
      setCalendar(result);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-[80%] mx-auto gap-5">
      {calendar.map((eventItem, index) => {
        return (
          <CalendarItem
            title={eventItem.title}
            description={eventItem.description}
            image={eventItem.image}
            link={eventItem.link}
            date={eventItem.date}
            index={index}
            color={eventItem.color}
          />
        );
      })}
    </div>
  );
};

export default Calendar;
