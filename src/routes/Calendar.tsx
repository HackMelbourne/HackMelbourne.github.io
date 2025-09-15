import CalendarItem from "../features/CalendarItem/CalendarItem";

import { useEffect, useState } from "react";
import { getEventCalendar } from "../services/eventListServices";
import { CalendarItemProps } from "../features/CalendarItem/CalendarItem.model";
import { CircularProgress } from "@mui/material";
import TitleHero from "../features/TitleHero/TitleHero";

const Calendar = () => {
  const [calendar, setCalendar] = useState<CalendarItemProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getEventCalendar().then((result) => {
      setCalendar(result);
      setIsLoading(false); // Set loading state to false once data is fetched
    });
  }, []);

  return (
    <>
      <TitleHero pageTitle="Calendar" pageDescription="See our upcoming list of events!" />
      {isLoading ? (
        <div className="col-span-1 mt-8 flex justify-center items-center">
          <CircularProgress color="inherit"/>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-16 md:gap-8 mt-16 px-8">
          {calendar.map((eventItem, index) => (
            <CalendarItem
              key={index}
              title={eventItem.title}
              description={eventItem.description}
              image={eventItem.image}
              link={eventItem.link}
              date={eventItem.date}
              index={index}
              color={eventItem.color}
              venue={eventItem.venue}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Calendar;
