import { functions, db } from "../firebase";

import { addDoc, collection, doc, setDoc, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

import { useState, useEffect } from "react";

// Model imports
import { RiserGameModel, RiserOutputData } from "../routes/eventPages/RiserGame.model";

interface Rank {
  name: string,
  score: number,
  id: string,
}

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
  const [rankings, setRankings] = useState<Rank[]>([]);
  const leaderboardRef = collection(db, "leaderboard-test");

  const getRankings = async () => {
    let unsubscribe : any;
    try {
      unsubscribe = onSnapshot(query(
        leaderboardRef,
        orderBy("score"),
        orderBy("createdOn"),
        limit(20)),
        (querySnapshot) => {
          let ranks : Rank[] = [];
          querySnapshot.forEach((doc) => {
            ranks.push({
              name: doc.data().name,
              score: doc.data().score,
              id: doc.id,
            });
            setRankings(ranks);
          });
        });
    } catch (e) {
      console.log(e);
    }
    return () => { 
      unsubscribe(); 
    };
  }
  
  useEffect(() => {
    getRankings();
  }, []);

  return { rankings };
}
