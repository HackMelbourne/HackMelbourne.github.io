import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { LinkItemProps } from "../features/LinkItem/LinkItemProps";

export async function getLinksPage(): Promise<LinkItemProps[]> {
  try {
    let result = await httpsCallable(functions, "getLinksPage")();

    // Storing result to localStorage for faster load times for next visits
    localStorage.setItem("links", JSON.stringify(result));
    return result.data as LinkItemProps[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
