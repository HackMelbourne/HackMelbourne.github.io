import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { Member } from "../features/TeamComponent/TeamComponent";

export async function getAboutUs(): Promise<Member[]> {
  try {
    let result = await httpsCallable(functions, "getAboutUs")();
    return result.data as Member[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
