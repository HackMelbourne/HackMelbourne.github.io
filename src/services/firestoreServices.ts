// Firebase imports
import { db, auth } from "../firebase";
import { getAuth, signInAnonymously } from "firebase/auth";
import { collection, addDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';

import { useState, useEffect } from "react";

// Model imports
import { RiserGameModel, RiserOutputData, RankEntry } from "../routes/eventPages/RiserGame.model";
import { Leaderboard } from "@mui/icons-material";


export async function setRiserGameData(data: RiserGameModel) {
  try {
    // Ensure the user is anonymously signed in
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        const preparedData = {...data,
          highestScore: Math.max(...data.gameData),
          submissionTime: new Date(),
        };

        return addDoc(collection(db, "riserData"), preparedData);
      })
      .catch((error) => {
        console.log(error)
      });

  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Failed to set Riser game data");
  }
}


export async function getRiserLeaderboard(): Promise<RankEntry[]> {
  const leaderboardRef = collection(db, "testRiserData");

  let leaderboardData: RankEntry[] = [];

  try {
    // Add orderby time when firebase functions implements feature
    const q = query(leaderboardRef, orderBy("score", "desc"), limit(20));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty != true) {
      console.log(querySnapshot);

      querySnapshot.forEach((doc) => {
        leaderboardData.push({
          name: doc.data().name,
          score: doc.data().score,
          id: doc.id,
        });
      });
    }

    console.log(leaderboardData!);

    return leaderboardData!;
  } catch (e) {
    console.log(e);
    return [];
  }
}
