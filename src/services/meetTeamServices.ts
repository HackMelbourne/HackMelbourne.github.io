import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { Member } from "../features/TeamComponent/TeamComponent.model";

export async function getMeetTheTeam(): Promise<Member[]> {
  try {
    const result = await httpsCallable(functions, "getMeetTheTeam")();
    return result.data as Member[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
