import { useEffect } from "react";
import { getEventCalendar } from "../services/eventListServices";

const Calendar = () => {
  useEffect(() => {
    getEventCalendar();
  }, []);
  return <div></div>;
};

export default Calendar;
