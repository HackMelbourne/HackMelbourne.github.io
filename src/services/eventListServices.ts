import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

export async function getEventCalendar() {
  try {
    console.log("testing");
    let result = await httpsCallable(functions, "getEventCalendar")();
    return result;
  } catch (e) {
    console.log(e);
  }
}
