import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { WorkshopLinkProps } from "../features/WorkshopLinks/WorkshopLinks.model";
  

export async function getWorkshopLinks(): Promise<WorkshopLinkProps[]> {
  try {
    console.log("testing");
    let result = await httpsCallable(functions, "getYoutubeLinks")();
    return result.data as WorkshopLinkProps[];
  } catch (e) {
    console.log(e);
    return [];
  }
}