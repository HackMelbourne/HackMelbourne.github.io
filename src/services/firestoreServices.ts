import { functions, db } from "../firebase";

import { addDoc, collection, doc, setDoc, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

import { useState, useEffect } from "react";

// Model imports
import { RiserGameModel, RiserOutputData } from "../routes/eventPages/RiserGame.model";

type RankList = {
  name: string,
  score: number,
  id: string,
}[];

export async function setRiserGameData(data: RiserGameModel) {
  const setData = httpsCallable(functions, "setRiserData");
  try {
    return setData({
      name: data.name,
      email: data.email,
      studentID: data.studentID,
      HMMember: data.HMMember,
      gameData: data.gameData,
    }).then((result) => {
      console.log("Successful");
      return result;
    });
  } catch (e) {
    console.log(e);
    alert("Oops something went wrong try again");
  }
}

export function getRiserLeaderboard() {
  const [rankings, setRankings] = useState<RankList>([]);
  const leaderboardRef = collection(db, "riserData");

  const getRankings = async () => {
    try {
      const unsubscribe = onSnapshot(query(
        leaderboardRef,
        orderBy("gameData"),
        orderBy("createdOn"),
        limit(20)),
        (querySnapshot) => {
          const ranks = querySnapshot.docs.map((doc) => {
            return {
              name: doc.data().name,
              score: doc.data().gameData,
              id: doc.id,
            }
          });
          setRankings(ranks);
        }
      );
      return () => { 
        unsubscribe(); 
      };
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    getRankings();
  }, []);

  return { rankings };
}
