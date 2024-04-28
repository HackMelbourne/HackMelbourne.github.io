import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { LinkItemProps } from "../features/LinkComponents/LinkItemProps";

export async function getLinksPage(): Promise<LinkItemProps[]> {
  try {
    let result = await httpsCallable(functions, "getLinksPage")();
    console.log(result.data)
    return result.data as LinkItemProps[];
  } catch (e) {
    console.log(e);
    return [];
  }
}