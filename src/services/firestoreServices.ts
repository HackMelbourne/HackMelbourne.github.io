import { functions, db, auth } from "../firebase";

import {
  addDoc,
  collection,
  doc,
  setDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { signInAnonymously } from "firebase/auth";

import { useState, useEffect } from "react";

// Model imports
import { RiserGameModel, RiserOutputData, RankEntry } from "../routes/eventPages/RiserGame.model";
import { Leaderboard } from "@mui/icons-material";

export async function setRiserGameData(data: RiserGameModel) {
  await signInAnonymously(auth);

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
