import CalendarItem from "../features/CalendarItem/CalendarItem";

import { useEffect, useState } from "react";
import { getEventCalendar } from "../services/eventListServices";
import { CalendarItemProps } from "../features/CalendarItem/CalendarItem.model";
import TitleHero from "../features/TitleHero/TitleHero";

const Calendar = () => {
  const [calendar, setCalendar] = useState<CalendarItemProps[]>([]);

  useEffect(() => {
    getEventCalendar().then((result) => {
      setCalendar(result);
    });
  }, []);

  return (
    <>
      <TitleHero pageTitle="Calendar" pageDescription="See out upcoming list of big and small events!"></TitleHero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-16 md:gap-8 mt-16 px-8">
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
              venue={eventItem.venue}
            />
          );
        })}
      </div>
    </>
  );
};

export default Calendar;
