import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { CalendarItemProps } from "../features/CalendarItem/CalendarItem.model";

export async function getEventCalendar(): Promise<CalendarItemProps[]> {
  try {
    console.log("testing");
    let result = await httpsCallable(functions, "getEventCalendar")();
    return result.data as CalendarItemProps[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
