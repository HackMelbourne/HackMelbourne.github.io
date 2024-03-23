import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";

import { TournamentBracketProps } from "../features/TournamentBracket/TournamentBracket.model";

export async function getHackiethonBrackets(): Promise<TournamentBracketProps[]> {
  try {
    let result = await httpsCallable(functions, "getHackiethonBrackets")();
    return result.data as TournamentBracketProps[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
